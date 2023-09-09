import React from "react";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import NavBar from "./Navbar/Navbar";
import Card from "react-bootstrap/Card";
import axios from "axios";
import MapboxGeocoder from "mapbox-gl-geocoder";
import RainLayer from "mapbox-gl-rain-layer";

function Map(props) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibmFnYXJhai1wb29qYXJpIiwiYSI6ImNsOGw1M3d6ZjF3bmIzdXF4dzJzbDI0OXMifQ.YKQSwfcvRCUlD4Vx0pKpyQ";

  const mapContainer = useRef("map-container");
  const map = useRef(null);
  const [location, setLocation] = useState([0, 0]);
  const [zoom, setZoom] = useState(9);

  const toggleChat = () => {
    setShowChat(!showChat);
  };
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    const marker = new mapboxgl.Marker({
      color: "#FF0000",
    })
      .setLngLat([76, 14])
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
      .addTo(map.current);

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    map.current.addControl(nav, "bottom-right");
    const start = [76, 14];

    async function getRoute(end) {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const json = await query.json();
      const data = json.routes[0];
      const route = data.geometry.coordinates;
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };

        if (map.current.getSource("route")) {
          map.current.getSource("route").setData(geojson);
        } else {
          map.current.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: geojson,
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#00FF22",
              "line-width": 5,
              "line-opacity": 0.75,
            },
          });
        }
        const instructions = document.getElementById("instructions");
        const steps = data.legs[0].steps;

        let tripInstructions = "";
        for (const step of steps) {
          tripInstructions += `<li>${step.maneuver.instruction}</li>`;
        }
        instructions.innerHTML = `<p><strong>Trip duration: ${Math.floor(
          data.duration / 60
        )} min 🚴 </strong></p><ol>${tripInstructions}</ol>`;
      }

      map.current.on("load", () => {
        getRoute(location);

        // Add   locationing point to the map
        map.current.addLayer({
          id: "point",
          type: "circle",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: location,
                  },
                },
              ],
            },
          },
          paint: {
            "circle-radius": 10,
            "circle-color": "#3887be",
          },
        });
      });

      map.current.on("click", (event) => {
        const coords = Object.keys(event.lngLat).map(
          (key) => event.lngLat[key]
        );
        const end = {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Point",
                coordinates: coords,
              },
            },
          ],
        };
        if (map.current.getLayer("end")) {
          map.current.getSource("end").setData(end);
        } else {
          map.current.addLayer({
            id: "end",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: coords,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#f30",
            },
          });
          setInstructionDisplay(true);
        }
        getRoute(coords);
      });
    }
  }, [location]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Map;
