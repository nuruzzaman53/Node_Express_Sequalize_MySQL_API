const express = require("express");
const router = express.Router();
const db = require("../models/model");
const User = db.users;

router.post("/addUser", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map((e) => e.message);
      res.status(400).json({ success: false, errors });
    } else {
      res
        .status(500)
        .json({ success: false, message: "An unexpected error occurred" });
    }
  }
});

module.exports = router;
