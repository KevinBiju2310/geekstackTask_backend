const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user.controller");

router.post("/login", userController.login);
router.post("/register", userController.register);

router.post("/verify-otp", userController.verifyOtp);

router.post("/logout", userController.logout);

module.exports = router;