const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    completion: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    instituteName: {
      type: String,
      required: true,
    },
    medicalRegistrationNumber: {
      type: String,
    },
    year: {
      type: String,
    },
    pgdegree: {
      type: String,
    },
    speciality: {
      type: String,
    },
    fellowship: {
      type: String,
    },
    otp: {
      type: Number,
    },
    otpExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
