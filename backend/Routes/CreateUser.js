const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Secret key for JWT
const jwtSecret = "mynameprakharandiamjoblessyeyeye";

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const user = new User({
        name: req.body.name,
        password: hashedPassword,
        email: req.body.email,
        location: req.body.location,
      });
      await user.save();
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "User not found" });
      }
      const pwdCompare = await bcrypt.compare(password, userData.password);
      if (!pwdCompare) {
        return res.status(400).json({ errors: "Invalid credentials" });
      }
      
      // JWT Token generation
      const token = jwt.sign({ userId: userData._id }, jwtSecret, { expiresIn: "1h" });
      return res.json({ success: true, token }); // Send token to the client upon successful login
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
