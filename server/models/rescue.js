const mongoose = require('mongoose');

const passportLocalMongoose = require("passport-local-mongoose");

const RescueSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },

  username: {
    type: String,
    require: true,
    unique: true
  },

  password: {
    type: String,
    require: true
  }

}, {timestamps: true});

RescueSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Rescuer", RescueSchema);
