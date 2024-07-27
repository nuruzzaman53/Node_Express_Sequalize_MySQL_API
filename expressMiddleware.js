const express = require("express");

const app = express();

app.get("/hello", (req, res, next) => {
  res.send("Welcome to Express");
  next();
});

/// Application level middleware //

app.use("user/:id", (req, res, next) => {
  res.send(req.params);
  next();
});

app.get(
  "/user/:id",
  (req, res, next) => {
    res.send(req.params.id);
    next();
  },
  (req, res, next) => {
    res.send("User info");
  }
);

app.get(
  "user/:id",
  (req, res, next) => {
    if (req.params.id === 0) next("route");
    else next();
  },
  (req, res, next) => {
    res.send("Info");
    next();
  }
);
// Error handling middleware //
/*
Error-handling middleware always takes four arguments. 
You must provide four arguments to identify it as an error-handling middleware
function. Even if you don’t need to use the next object, 
you must specify it to maintain the signature. Otherwise, 
the next object will be interpreted as regular middleware and
 will fail to handle errors.
*/
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.sendStatus("Hello");
  next();
});

//Serving static files in Express
//code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static("public"));
app.use(express.static("uploads"));
