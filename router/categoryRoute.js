const express = require("express");
const router = express.Router();

const db = require("../models/model");
db.category = Category;

router.post("/addComment", async (req, res) => {
  try {
    const newCategory = await Category.create({});
    res.status(200).send({ success: true, data: newCategory });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errros.map((e) => e.message);
      res.status(400).send({ success: false, data: errors });
    } else {
      res
        .status(500)
        .send({ success: false, message: "An unknown error occured" });
    }
  }
});

module.exports = router;
