if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const dbUrl = process.env.MONGODB_URL;
const mongoose = require("mongoose");
const User = require("./models/user");
const Requests = require("./models/request");
const Rescuer = require("./models/rescue");

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("database conected");
});

const populator = async () => {
  //await Rescuer.deleteMany({});
  for (let i = 0; i < 100; i++) {
    const randomCoordinates = generateRandomCoordinatesWithinIndia();
    let rescuer = new Rescuer({
      email: `whatsup${Math.random()}@gmail.com`,
      username: `nothing${Math.random()}`,
      address: "bangalotre",
      description: " some sample description",
      rest: {
        geometry: {
          type: "Point",
          coordinates: randomCoordinates,
        },
        capacity: 193,
        services: ["counseling", "food and water"],
        availability: ["available"],
        specialization: ["fire response", "medical"],
        medical_facility: [
          "basic first aid",
          "intensive care units",
          "pediatric care",
        ],
        supply_and_resource: [
          "limited supplies",
          "medical equipment available",
          "pharmaceuticals available",
          "well-stocked",
        ],

        calamities: ["earthquake", "fire"],
      },

      contact: {
        country_code: "+91",
        phone_no: "90232365376" + Math.random(),
      },
    });
    await rescuer.save();
  }
};

function generateRandomCoordinatesWithinIndia() {
  // Define latitude and longitude ranges for India
  const minLatitude = 11.5; // Approximate southernmost point of Karnataka
  const maxLatitude = 18.5; // Approximate northernmost point of Karnataka
  const minLongitude = 74.1; // Approximate westernmost point of Karnataka
  const maxLongitude = 78.5;

  // Generate random latitude and longitude within the specified ranges
  const randomLatitude =
    Math.random() * (maxLatitude - minLatitude) + minLatitude;
  const randomLongitude =
    Math.random() * (maxLongitude - minLongitude) + minLongitude;

  return [randomLatitude.toFixed(6), randomLongitude.toFixed(6)];
}

//populator();

const reqPopulator = async () => {
  //await Requests.deleteMany({});
  for (let i = 0; i < 100; i++) {
    const randomCoordinates = generateRandomCoordinatesWithinIndia();
    let rescuer = new Requests({
      rescuer: "64faf0ede2d1b20dfc6291de",
      user: "64f7264ace47e3229807ae3e",
      team_member: "64f71ec839f6114c509f009d",
      description: " some sample description",
      rest: {
        geometry: {
          type: "Point",
          coordinates: randomCoordinates,
        },
        capacity: 193,
        services: ["counseling", "food and water"],
        availability: ["available"],
        specialization: ["fire response", "medical"],
        medical_facility: [
          "basic first aid",
          "intensive care units",
          "pediatric care",
        ],
        supply_and_resource: [
          "limited supplies",
          "medical equipment available",
          "pharmaceuticals available",
          "well-stocked",
        ],

        calamities: ["earthquake", "fire"],
      },

      status: "pending",
    });
    await rescuer.save();
  }
};
reqPopulator();
console.log("done");
