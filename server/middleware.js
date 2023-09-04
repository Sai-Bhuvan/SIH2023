const { session } = require("passport");

module.exports.isloggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "Sign in first");
    return res.redirect("/login");
  }
  next();
};

module.exports.isVerified = (req, res, next) => {
  const verCode = req.body.verCode;
  if (verCode != session.verificationCode) {
    res.send("oops");
  } else next();
};
