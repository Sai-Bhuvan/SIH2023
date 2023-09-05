const User = require("../../../models/user");

module.exports.register = async (req, res) => {
  try {
    const { username, email, password, country_code, phone_no } = req.body;

    const contact = { country_code, phone_no };
    const user = new User({ email, username, contact });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Registered Successfully");
      res.send("account created succefully");
    });
  } catch (e) {
    console.log(e.message);
    req.flash("error", e.message);
    res.redirect("/auth/user/register");
  }
};
