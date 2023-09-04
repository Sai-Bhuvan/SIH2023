const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  contact: {
    country_code: {
      type: String,
      require: true,
    },
    phone_no: {
      type: String,
      require: true,
      unique: true,
    },
  },
  rescue_team: {
    type: Schema.Types.ObjectId,
    ref: "Rescuer",
  },
  age: Number,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
