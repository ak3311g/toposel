const express = require("express");
const { check } = require("express-validator");
const { register, login } = require("../controller/authController");

const router = express.Router();

// Registration Route
router.post(
  "/register",
  [
    check("username", "Username is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
    check("fullName", "Full Name is required").notEmpty(),
    check("gender", "Gender is required").notEmpty(),
    check("dob", "Date of Birth is required").isDate(),
    check("country", "Country is required").notEmpty(),
  ],
  register
);

// Login Route
router.post("/login", login);

module.exports = router;