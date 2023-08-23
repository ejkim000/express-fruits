require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3006;
// const fruits = require("./models/fruits");
const Fruit = require("./models/fruit.js"); // model name is capitalized
// const vegetables = require("./models/vegetables");
const Vegetable = require("./models/vegetable.js")

// CONNECT WITH MONGOOSE
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useCreateIndex: true, // don't use this anymore
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
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

// this allows the body of post request
app.use(express.urlencoded({ extended: true })); // for the form submit


// ROUTES
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

  const createdFruit = await Fruit.create(req.body);
  console.log(createdFruit);
  // redirect to the fruits list
  res.redirect("/fruits");
});

app.get("/fruits/:id", async (req, res) => {
  // 1st param: Filename of view
  // 2nd param: must be a object, variable available inside the jsx file
  const foundFruit = await Fruit.findById(req.params.id);
  res.render("fruits/Show", {
    fruit: foundFruit,
  });
});

app.get("/vegetables", (req, res) => {
  // res.send(fruits);
  res.render("vegetables/Index", {
    vegetables: vegetables,
  });
});

app.get("/vegetables/new", (req, res) => {
  // res.send(fruits);
  res.render("vegetables/New");
});

app.post("/vegetables", (req, res) => {
  req.body.readyToEat === "on"
    ? (req.body.readyToEat = true)
    : (req.body.readyToEat = false);

  vegetables.push(req.body);

  res.redirect("/vegetables");
});

app.get("/vegetables/:index", (req, res) => {
  // 1st param: Filename of view
  // 2nd param: must be a object, variable available inside the jsx file
  res.render("vegetables/Show", {
    vegetable: vegetables[req.params.index],
  });
});

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
