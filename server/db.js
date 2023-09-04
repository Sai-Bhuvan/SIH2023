if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const dbUrl = process.env.MONGODB_URL;
const mongoose = require("mongoose");
const User = require("./models/user");
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
  await Rescuer.deleteMany({});
  let rescuer = new Rescuer({
    email: "whatsup@gmail.com",
    centername: "nothing",
    location: {
      type: "Point",
      coordinates: [100.21, 24.34],
    },
    address: "bangalotre",
    description: "oh my good",
    capacity: 193,
    services: ["counseling", "food and water"],
    availability: ["almost full"],
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

    contact: {
      country_code: "+91",
      phone_no: "90232365376",
    },
  });

  await rescuer.save();
};

populator();
