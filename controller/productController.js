const db = require("../models/model");

// create a modal //

const Product = db.products;
const Review = db.reviews;

// create a new product ///

const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

// get all products //

const getAllProducts = async (req, res) => {
  // step over the first 10 elements, and take 2 //
  let products = await Product.findAll({
    offset:0,
    limit: 2,
    order: [["title", "DESC"]],
  });
  res.status(200).send(products);
};

// get product by id //

const getSingleProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id, published: true } });
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
  const data = await Product.findAll({
    include: [
      {
        model: Review,
        as: "review",
      },
    ],
    where: { id: 2 },
  });
  res.status(200).send(data);
};

module.exports = {
  addProduct,
  getSingleProduct,
  getPublishedProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductReviews,
};
