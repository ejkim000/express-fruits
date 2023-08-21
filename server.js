const express = require("express");
const app = express();
const PORT = 3006;
const fruits = require("./models/fruits");
const vegetables = require("./models/vegetables");

// SETTING UP VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log('I run for all routes!')
    next();
});

// this allows the body of post request
app.use(express.urlencoded({extended:false})); // for the form submit


// ROUTES
app.get('/fruits', (req, res) => {
    // res.send(fruits);
    res.render('fruits/Index', {
        fruits: fruits
    });
})


// new fruit
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New')
});

// create = post
app.post('/fruits', (req, res) => {
    // set readyToEat value
    (req.body.readyToEat === 'on') ? req.body.readyToEat = true : req.body.readyToEat = false;
    // add new fruit to the fruits
    fruits.push(req.body);
    // redirect to the fruits list
    res.redirect('/fruits');
});


app.get('/fruits/:index', (req, res) => {
    // 1st param: Filename of view
    // 2nd param: must be a object, variable available inside the jsx file
    res.render('fruits/Show', {
        fruit: fruits[req.params.index]
    });
});


app.get('/vegetables', (req, res) => {
    // res.send(fruits);
    res.render('vegetables/Index', {
        vegetables: vegetables
    });
})

app.get('/vegetables/new', (req, res) => {
    // res.send(fruits);
    res.render('vegetables/New');
})

app.post('/vegetables', (req, res) => {
    (req.body.readyToEat === 'on') ? req.body.readyToEat = true: req.body.readyToEat = false;

    vegetables.push(req.body);

    res.redirect('/vegetables');
})

app.get('/vegetables/:index', (req, res) => {
    // 1st param: Filename of view
    // 2nd param: must be a object, variable available inside the jsx file
    res.render('vegetables/Show', {
        vegetable: vegetables[req.params.index]
    });
});




// LISTEN
app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
