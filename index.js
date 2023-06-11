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

app.get("/api", (req, res) => {
  res.render("api");
});

app.get("*", (req, res) => {
  res.render("404");
});

// 404 page
app.use((req, res, next) => {
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.render("404");
  }

  // respond with json
  if (req.accepts("json")) {
    res.json({ error: "404" });
  }

  // default to plain-text. send()
  res.type("txt").send("404");
});

app.listen(3000);