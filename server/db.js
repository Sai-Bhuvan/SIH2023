if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const dbUrl = process.env.MONGODB_URL;
const mongoose = require("mongoose");
const User = require("./module/user");

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("database conected");
});

const populator = async () => {
  await User.deleteMany({});
  let user = new User({
    email: "nags2@gmail.com",
    username: "nagaraj2",
  });
  user.save();
};

populator();
