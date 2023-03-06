const express = require('express');
const mongoose = require('mongoose');
// const router = require('express');
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
  // app.use(router)

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

//index of all products
  app.get('/get_products', async (req, res) => {
    let response = await MyProducts.find({});
    console.log(response);
    res.json(response);
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

// app.post('./create_product', (req, res) => {
//     let id = req.query.idOfProduct
// })


app.post('update_product', async (req, res) => {
    console.log(req.body);
    let response = await MyProducts.findByIdAndUpdate(req.body.id, {name: req.body.newName}, {new: true})
    console.log("response form collection", response);
    res.json(response);
})





// app.get('/get_specific_product/:productId', async (req, res) => {
//     console.log("get specific product route");
//     let id = req.params.productId;
//     let response = await product.findById(id);
//     console.log(response);
//     console.log(id);
//     res.json(response)
// })

app.get('/get_single_product/:idOfProduct', async (req, res) => {
    let id = req.params.idOfProduct;
    let response = await MyProducts.findById(id);
    console.log(response);
    res.send(response);
})

// app.delete('/delete/:idOfProduct', async (req, res) => {
//   let id = req.params.idOfProduct
//   let response = await MyProducts.findByIdAndDelete(id)
//     .then(() => res.json({ success: true }))
//     .catch(err => res.status(404).json({ success: false }));
// });

app.delete("/delete/:productID", async(req, res) => {
    let id = req.params.productID;
    let response = await MyProducts.findByIdAndDelete(id);
    console.log(response);
})

 app.listen(5000, () => {
    console.log('Server listening on port 5000');
 });