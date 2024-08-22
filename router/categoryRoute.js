const express = require("express");

const router = express.Router();
const {
  addCategory,
  upload,
  getAllCategory,
} = require("../controller/categoryController");

router.post("/addCategory", upload, addCategory);

router.get("/allCategory", getAllCategory);

module.exports = router;
