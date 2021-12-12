const router = require("express").Router();
const authModel = require("../models/auth.model");

const {
    register,
    sendOtp,
    login,
    verifyOtp
} = require("../controller/auth.controller");

router.post("/register", register);
router.post("/otp/send", sendOtp);
router.post("/login", login);
router.post("/otp/verify", verifyOtp)

module.exports = router;