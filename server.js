const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/under_development", (req, res) => {
  res.render("under_development");
});

app.get("/api", (req, res) => {
  res.render("api");
});

app.listen(3000);
