const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    readyToEat: Boolean
});


const Vegetable = mongoose.model('Fruit', vegetableSchema); // DB name and schema

module.exports = Vegetable;