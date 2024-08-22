const db = require("../models/model");
const multer = require("multer");
const path = require("path");

// category model //
const Category = db.category;

const addCategory = async (req, res) => {
  try {
    let categoryInfo = {
      name: req.body.name,
      categoryImage: req.file.path,
    };
    const newCategory = await Category.create(categoryInfo);
    res.status(200).send({ success: true, data: newCategory });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map((e) => e.message);
      res.status(400).send({ success: false, data: errors });
    } else {
      res
        .status(500)
        .send({ success: false, message: "An unknown error occured" });
    }
  }
};

const getAllCategory = async (req, res) => {
  let category = await Category.findAll({});
  res.status(200).send(category);
};

// image upload controller //
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // output 25072024.png
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "5000000" }, // Max fileSize: 5 MB //
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype); // image/png, image/jpg
    const extname = fileTypes.test(path.extname(file.originalname)); // .js //
    if (mimeType && extname) {
      return cb(null, true);
      // To accept the file pass `true`, like so:cb(null, true)
    }
    cb("Give proper file format to upload");
  },
}).single("categoryImage");

module.exports = { addCategory, upload, getAllCategory };
