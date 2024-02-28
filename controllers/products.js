const Product = require('../models/product');

const saveProduct = (req, res, next) => {
    const title = req.body.title; // Assuming you're using Express and parsing the request body

    const product = new Product(title);
    product.save();

    res.redirect('/'); // Redirect to home page or wherever appropriate
};

const getAllProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.json(products); // Assuming you want to return products as JSON
};

module.exports = {
    saveProduct: saveProduct,
    getAllProducts: getAllProducts
};
