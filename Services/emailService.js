const nodemailer = require("nodemailer");
const getOtpEmailTemplate = require("../Utils/getOtpEmailTemplate");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOtpEmail = async (to, otp) => {
  await transporter.sendMail({
    from: `"Duty Doctor" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your OTP for Duty Doctor Login",
    // text: `Your OTP is ${otp}`,
    html: getOtpEmailTemplate(otp),
  });
};

module.exports = { sendOtpEmail };
