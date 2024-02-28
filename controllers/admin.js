const productController = require('./products');
const path = require('path');
const routeDir = require('../util/path');

const adminController = (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'add-product.html'));
};

module.exports = {
    adminController: adminController,
    saveProduct: productController.saveProduct,
    getAllProducts: productController.getAllProducts
};
