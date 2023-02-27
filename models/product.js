const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String},
    img: {type: String},
    price: {type: Number},
    description: {type: String},
    inStock: {type: Number}

});

const MyProducts = mongoose.model('MyProducts', productSchema)
module.exports = MyProducts;

// const imageSchema = new mongoose.Schema ({
//     name: String,
//     desc:String,
//     image: 
//     {
//         data: Buffer,
//         contentType: String
//     }
// });

// module.exports = new mongoose.model('Image', imageSchema)