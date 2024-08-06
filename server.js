const express = require("express");
const cors = require("cors");

// Initialize app //

const app = express();

// middleware set-up //

app.use(cors());
app.use(express.json()); // parse JSON data from HTTP requests //
app.use(express.urlencoded({ extended: true })); // permit req.body //

const router = require("./router/productRoutes.js");
const userRouter = require("./router/userRoutes.js");
app.use("/api", router);
app.use("/api/user", userRouter);

//static image folder //

app.use("/Images", express.static("./Images"));

// app route//

app.get("/welcome", (req, res) => {
  res.send("Welcome to Node Express MySQL Sequelize API");
});

// App running under port  //

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running under port: ${port}`);
});
