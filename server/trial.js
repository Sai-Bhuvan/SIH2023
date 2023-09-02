if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACC_ID;
const authToken = process.env.TWILIO_ACCESS_TOKEN;

const client = twilio(accountSid, authToken);

const userPhoneNumber = "+917019096676";

const verificationCode = "123456";

client.messages
  .create({
    body: `Your verification code is: ${verificationCode}`,
    from: "+1 984 355 8631",
    to: userPhoneNumber,
  })
  .then((message) => console.log(`Message sent: ${message.sid}`))
  .catch((error) => console.error(`Error sending message: ${error.message}`));
