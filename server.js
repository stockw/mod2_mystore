const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express()
// const Item = require('./models/items');
const MyProducts = require('./models/product');
const { response } = require('express');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: '*'
  }));
 
  app.use(express.json());

  let connectionString = `mongodb+srv://${process.env.MONGOOSEUSERNAME}:${process.env.MONGOOSEPASSWORD}@mongosetupcluster.1dnn4wp.mongodb.net/Store?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });
 
  mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
  });


app.post('/create_product', async (req, res) => {
    const {nameString: name, imgString: img, priceNumber: price, descriptionString: description, inStockNumber: inStock} = req.body

    let returnedValue = await MyProducts.create ({
        name,
        img,
        price,
        description,
        inStock
    })
    console.log(returnedValue);
    if (returnedValue) {
        console.log("upload complete");
    }
    res.send(returnedValue);
})


app.post('update_product', async (req, res) => {
    console.log(req.body);
    let response = await MyProducts.findByIdAndUpdate(req.body.id, {name: req.body.newName}, {new: true})
    console.log("response form collection", response);
    res.json(response);
})


app.get('/get_products', async (req, res) => {
    let response = await MyProducts.find({});
    console.log(response);
    res.json(response);
});


app.get('/getspecificproduct/:product_id', async (req, res) => {
    console.log("get specific product route");
    // let id = req.params.product_id;
    // let response = await Product.findById(id);
    // console.log(response);
    // console.log(id);

    res.json(response)
})

app.get('/get_single_product_using_id/:idOfProduct', async (req, res) => {
    let id = req.params.idOfProduct;
    let response = await MyProducts.findById(id);
    console.log(response);
    res.send(response);
})

 app.listen(5000, () => {
    console.log('Server listening on port 5000');
 });