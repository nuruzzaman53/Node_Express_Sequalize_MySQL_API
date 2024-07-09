const express = require("express");
const cors = require("cors");

// Initialize app //

const app = express();

const corsOption = {
  origin: "http://localhost:8081",
};

// middleware set-up //

app.use(cors(corsOption));
app.use(express.json()); // parse JSON data from HTTP requests //
app.use(express.urlencoded({ extended: true })); // permit req.body //

const router = require("./router/productRoutes.js");
app.use("/api", router);

// app route//

app.get("/welcome", (req, res) => {
  res.send("Welcome to Node Express MySQL Sequelize API");
});

// App running under port  //

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running under port: ${port}`);
});
