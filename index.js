const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/api", (req, res) => {
  res.render("api");
});

// 404 page
app.use((req, res, next) => {
  res.status(404);
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
