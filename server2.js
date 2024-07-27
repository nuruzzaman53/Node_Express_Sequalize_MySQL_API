const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

// middlewares//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router //

const db = require("./models/model");

db.products = Product;
db.reviews = Review;

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
  const updateProduct = await Product.update(req.body, { where: { id: id } });
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

const createProduct = async () => {
  try {
    const product = await Product.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const findProductById = async () => {
  try {
    const id = req.params.id;
    const searchProduct = await Product.findAll({
      where: { id: id, title: { ["op.like"]: "%apple%" } },
      order: [["title", "DESC"]],
      attributes: ["id", "title", "description", "price"],
      limit: 100,
      offset: 2,
      include: [
        {
          model: Review,
          as: "reviews",
        },
      ],
    });
    res.status(400).send(searchProduct);
  } catch (error) {
    res.status(200).send(error);
  }
};

const updateProduct = async () => {
  try {
    const id = req.params.id;
    const newProduct = await Product.update(req.body, { where: { id: id } });
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteProduct = async () => {
  try {
    const targetProduct = await Product.destroy({ where: { id: id } });
    res.status(200).send(targetProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

const searchByTitle = async () => {
  try {
    const title = req.params.title;
    const targetProduct = await Product.findAll({
      where: {
        title: {
          ["op.like"]: title,
        },
      },
      attributes: ["title", "description", "price"],
      limit: 10,
      offset: 0,
      order: [["title", "ASC"]],
    });
    res.status(200).send(targetProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

const searchByPriceRange = async () => {
  try {
    const priceRange = req.params.price;
    const targetProduct = await Product.findAll({
      where: {
        price: {
          ["op.gte"]: priceRange,
        },
        order: [["title", "DESC"]],
        attributes: ["title", "description", "price"],
      },
    });
    res.status(200).send(targetProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

// App listening //

app.listen(PORT, () => {
  console.log(`App is running at port ${PORT}`);
});
