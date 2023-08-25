require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3006;
const Fruit = require("./models/fruit.js"); // model name is capitalized
const Vegetable = require("./models/vegetable.js");
const methodOverride = require("method-override");

// CONNECT TO MONGOOSE
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// SETTING UP VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
app.use(express.urlencoded({ extended: true })); // for the form submit
app.use(methodOverride("_method"));

// ROUTES
// ALL
app.get("/fruits", async (req, res) => {
  const allFruits = await Fruit.find({});
  res.render("fruits/Index", {
    fruits: allFruits,
  });
});

// NEW : form
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

// CREAT : post
app.post("/fruits", async (req, res) => {
  // set readyToEat value
  req.body.readyToEat === "on"
    ? (req.body.readyToEat = true)
    : (req.body.readyToEat = false);
  // create new fruit
  const newFruit = await Fruit.create(req.body);
  console.log(newFruit);

  // redirect to the fruits list
  res.redirect("/fruits");
});

// SHOW
app.get("/fruits/:id", async (req, res) => {
  // 1st param: Filename of view
  // 2nd param: must be a object, variable available inside the jsx file
  const foundFruit = await Fruit.findById(req.params.id);
  res.render("fruits/Show", {
    fruit: foundFruit,
  });
});

// DELETE
app.delete("/fruits/:id", async (req, res) => {
  await Fruit.findByIdAndRemove(req.params.id);
  res.redirect("/fruits");
});

//============== Vegetable ===============//

app.get("/vegetables", async (req, res) => {
  const allVegetables = await Vegetable.find({});
  res.render("vegetables/Index", {
    vegetables: allVegetables,
  });
});

app.get("/vegetables/new", (req, res) => {
  // res.send(fruits);
  res.render("vegetables/New");
});

app.post("/vegetables", async (req, res) => {
  req.body.readyToEat === "on"
    ? (req.body.readyToEat = true)
    : (req.body.readyToEat = false);

  await Vegetable.create(req.body);
  res.redirect("/vegetables");
});

app.get("/vegetables/:id", async (req, res) => {
  const foundVegetable = await Vegetable.findById(req.params.id);
  res.render("vegetables/Show", {
    vegetable: foundVegetable,
  });
});

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
