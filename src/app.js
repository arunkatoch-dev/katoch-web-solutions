const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
require("./db/conn");
const Kwsuser = require("./models/katochWebSolutionuser");
const PORT = process.env.PORT || 7000;
const path = require("path");
const hbs = require("hbs");

// Setting Paths ------->
const static_Path = path.join(__dirname, "../Public");
const partials_Path = path.join(__dirname, "../templates/partials");
const views_Path = path.join(__dirname, "../templates/views");

// Set view engine -------->
app.set("view engine", "hbs");
app.set("views", views_Path);

//app.use (Middleware)----->
app.use(express.static(static_Path));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register Partials------>
hbs.registerPartials(partials_Path);

// Routing ------>
// app.get(path, callback):
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/contact", async (req, res) => {
  try {
    const user = new Kwsuser(req.body);
    await user.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/sciencequiz", (req, res) => {
  res.render("sciencequiz");
});
app.get("/pageunderconstruction", (req, res) => {
  res.status(404).render("construction_page");
});
app.get("*", (req, res) => {
  res.status(404).render("404_error_page");
});

// Server Create------>
app.listen(PORT, () => {
  console.log(`server listed at port ${PORT}`);
});
