const User = require("../../../module/user");

module.exports.renderRegister = (req, res) => {
  res.render("register");
};

module.exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Registered Successfully");
      res.redirect("/");
    });
  } catch (e) {
    console.log(e.message);
    req.flash("error", e.message);
    res.redirect("register");
  }
};
