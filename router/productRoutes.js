const productController = require("../controller/productController");

const reviewController = require("../controller/reviewController");

const router = require("express").Router();

const {
  addProduct,
  getSingleProduct,
  getPublishedProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductReviews,
} = productController;

router.post("/addProduct", addProduct);
router.get("/allProducts", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/published", getPublishedProduct);
router.get("/single/:id", getSingleProduct);

// Reviews //

router.get("/allReviews", reviewController.allReviews);
router.post("/addReview", reviewController.addReview);
router.get("/getProductReviews", getProductReviews);

module.exports = router;
