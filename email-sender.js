const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const myPath = path.resolve("content", "index.html");
const result = fs.readFileSync(myPath, "utf-8");
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

const mailOptions = {
  to: "............@gmail.com",
  subject: "email",
  text: "hola",
  html: result,
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
