const bcrypt = require("bcryptjs");
const userModel = require("../Models/user.model");
const { generateOtp } = require("../Utils/generateOtp");
const { sendOtpEmail } = require("../Services/emailService");

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const otp = generateOtp();
    user.otp = otp;
    user.otpExpires = new Date(Date.now() + 5 * 60 * 1000);
    await user.save();
    await sendOtpEmail(email, otp);
    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internet Server Error" });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.otpExpires < new Date()) {
      return res.status(410).json({ message: "Otp expired" });
    }
    if (user.otp !== parseInt(otp)) {
      return res.status(401).json({ message: "Invalid Otp" });
    }
    user.otp = null;
    user.otpExpires = null;
    await user.save();
    return res.status(200).json({ message: "OTP verified successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internet Server Error" });
  }
};

const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      degree,
      completion,
      country,
      instituteName,
      medicalRegistrationNumber,
      year,
      pgdegree,
      speciality,
      fellowship,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !degree ||
      !completion ||
      !country
    ) {
      return res.status(400).json({ message: "Required fields missing" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const newUser = new userModel({
      firstName,
      lastName,
      email,
      degree,
      completion,
      country,
      instituteName,
      medicalRegistrationNumber,
      year,
      pgdegree,
      speciality,
      fellowship,
    });
    console.log(newUser);
    await newUser.save();
    return res.status(201).json({ message: "Registration successfull" });
  } catch (error) {
    res.status(500).json({ message: "Internet Server Error" });
  }
};

module.exports = {
  login,
  register,
  verifyOtp,
};
