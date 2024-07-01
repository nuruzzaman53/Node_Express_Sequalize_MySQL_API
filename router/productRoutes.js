const productController = require("../controller/productController");

const router = require("express").Router();

const {
  addProduct,
  getSingleProduct,
  getPublishedProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = productController;

router.post("/addProduct",addProduct);
router.get("/allProducts", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/published", getPublishedProduct);
router.get("/single/:id", getSingleProduct);

module.exports = router;
