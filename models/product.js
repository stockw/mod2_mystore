const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    img: String,
    price: Number,
    description: String,
    inStock: Number

});

const MyProducts = mongoose.model('MyProducts', productSchema)
module.exports = MyProducts;