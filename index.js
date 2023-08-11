const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const PORT = process.env.PORT || 3000;
const CONFIG = require("./config.json");
require("dotenv").config({ path: "./.env" });

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(expressLayouts);
app.set("layout", "./layouts/general");

app.get("/", (req, res) => {
  res.render("index", { pageTitle: "" });
});

app.get("/login", (req, res) => {
  res.render("login", { pageTitle: "Login" });
});

app.get("/register", (req, res) => {
  res.render("register", { pageTitle: "Register" });
});

app.get("/verify", (req, res) => {
  res.render("verify", { pageTitle: "Verify Mail" });
});

app.get("/api", (req, res) => {
  res.redirect(CONFIG.apiSiteLink);
});

const apiRouter = require("./routes/__api");
app.use("/__api", apiRouter);

app.get("/tools", (req, res) => {
  res.redirect("/#tools");
});

const toolsRouter = require("./routes/tools");
app.use("/tools", toolsRouter);

// 404 page
app.use((req, res, next) => {
  res.status(404);
  res.render("404", { pageTitle: "404" });
});

app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
