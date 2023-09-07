const Rescuer = require("../../../models/rescue");

module.exports.register = async (req, res) => {
  try {
    const {
      email,
      username,
      address,
      description,
      password,
      country_code,
      phone_no,
      ...rest
    } = req.body;
    const contact = { country_code, phone_no };
    const rescuer = new Rescuer({
      email,
      username,
      address,
      description,
      rest,
      contact,
    });
    const registeredRescuer = await Rescuer.register(rescuer, password);

    req.login(registeredRescuer, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Registered Successfully");
      res.send("account created succefully");
    });
  } catch (e) {
    console.log(e.message);
    req.flash("error", e.message);
    res.redirect("/auth/rescuer/register");
  }
};
