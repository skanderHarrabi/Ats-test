const mongoose = require('mongoose');
const Products = mongoose.model('Products');
const axios = require('axios');


module.exports.products = async (req, res, next) => {
    const data = await axios.get('http://test.ats-digital.com:3000/products?size=100');
    data.data.products.map(p => {
        new Products(p).save();
    })
    console.log(data.data);
    res.json({ message: "success" });
}
module.exports.allProducts = async (req, res, next) => {
    const prods = await Products.find();
    res.json(prods);
}







