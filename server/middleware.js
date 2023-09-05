const { session } = require("passport");
const Rescuer = require("./models/rescue");
const User = require("./models/user");

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
    res.send("Oops! , verification failed");
  } else next();
};

module.exports.isRescueTeam = async (req, res, next) => {
  const { teamId } = req.params;
  const userId = req.user._id;
  if (!userId.equals(teamId)) {
    req.flash("error", "you dont have parmission to do that");
    return res.redirect(`/rescue/dashboard/${teamId}`);
  }
  next();
};

module.exports.isRescueTeamMember = async (req, res, next) => {
  const { teamId } = req.params;
  const user = await User.findById(req.user._id);
  if (!user.rescue_team.equals(teamId)) {
    req.flash("error", "you dont have parmission to do that");
    return res.redirect(`/rescue/dashboard/${teamId}`);
  }
  next();
};
