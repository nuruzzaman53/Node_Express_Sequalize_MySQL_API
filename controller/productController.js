const db = require("../models/model");
const multer = require("multer");
const path = require("path");

// create a modal //

const Product = db.products;
const Review = db.reviews;

// create a new product ///
const addProduct = async (req, res) => {
  try {
    let info = {
      image: req.file.path,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      published: req.body.published ? req.body.published : false,
    };
    const product = await Product.create(info);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};
// get all products //
const getAllProducts = async (req, res) => {
  // step over the first 10 elements, and take 2 //
  let products = await Product.findAll({
    order: [["title", "DESC"]],
  });
  res.status(200).send(products);
};
// get product by id //

const getSingleProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};
// get Published product //
const getPublishedProduct = async (req, res) => {
  const product = await Product.findAll({ where: { published: true } });
  res.status(200).send(product);
};
// update Product by ID //
const updateProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};
// Delete a product by ID //
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.destroy({ where: { id: id } });
  res.status(200).send("Product deleted");
};
// Get product reviews //
const getProductReviews = async (req, res) => {
  const productId = req.params.id;
  const data = await Product.findOne({
    include: [
      {
        model: Review,
        as: "review",
      },
    ],
    where: { id: productId },
  });
  res.status(200).send(data);
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
}).single("image");

module.exports = {
  addProduct,
  getSingleProduct,
  getPublishedProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductReviews,
  upload,
};
