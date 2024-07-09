const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

// middlewares//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router //

const db = require("./models/model");

db.products = Product;

app.get("/hello-world", (req, res) => {
  res.status(200).send("Welcome to Nabils world");
});

app.get("/api/allProducts", async (req, res) => {
  try {
    const products = await productModel.findAll({ limit: 10, offset: 2 });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Product search by name //

app.get("/api/product/:name", async (req, res) => {
  const productName = req.params.name;
  try {
    const productSearch = await Product.findOne({
      where: { name: productName },
    });
    res.status(200).send(productSearch);
  } catch (error) {
    res.status(400).send(error);
  }
});

// create a new Product //
app.post("/api/addProduct", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a product//

app.put("/api/updateProduct/:id", async (req, res) => {
  const id = req.params.id;
  const updateProduct = await Product.update(req, body, { where: { id: id } });
  res.status(200).send(updateProduct);
});

// product delete //

app.delete("/api/deleteProduct/:id", async (req, res) => {
  const id = req.params.id;
  const deleteProduct = await Product.destroy({ where: { id: id } });
  res.status(200).send("Product Deleted");
});

// get Product by  id //

app.get("/api/product/:id", async (req, res) => {
  const id = req.params.id;
  const productById = await Product.find({ where: { id: id } });
  res.status(200).send(productById);
});

// Product reviews //

app.get("/api/productReviews/:id", async (req, res) => {
  const productId = req.params.id;
  try {
    const result = await Product.findAll({
      where: {
        id: productId,
        include: [
          {
            model: Review,
            as: "review",
          },
        ],
      },
    });
  } catch (error) {
    res.status(400).send(error.name);
  }
});

// App listening //

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
