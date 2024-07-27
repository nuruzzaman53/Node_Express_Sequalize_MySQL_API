const express = require("express");

const app = express();
const admin = express();

//app.enable("case sensitive routing");
app.disable("case sensitive routing");

app.all("/nabil", (req, res) => {
  res.send("Thank you for coming at PRL");
});

app.param("id", (req, res, next, id) => {
  const user = {
    userId: id,
    name: "Nuruzzaman",
  };
  req.userDetails = user;
  next();
});

app.get("/user/:id", (req, res) => {
  res.send(req.userDetails);
});

app.locals.title = "Nuruzzaman";

app.get("/greeting", (req, res, next) => {
  res.send("Welcome to Code Game @ " + app.locals.title);
  next();
});

app
  .route("/user/info")
  .get((req, res) => {
    res.send("Get Method");
  })
  .post((req, res) => {
    res.send("POST Method");
  })
  .put((req, res) => {
    res.send("PUT Method");
  })
  .delete((req, res) => {
    res.send("DELETe Method");
  });

admin.get("/dashboard/:id", (req, res, next) => {
  res.send(admin.mountpath); /*admin*/
  next();
});

app.use("/admin", admin);

app.listen(4000, () => {
  console.log("App is running under 4000 port");
});
