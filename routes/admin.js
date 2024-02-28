const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const productController = require('../controllers/products');

// GET /admin/add-product
router.get('/add-product', adminController.adminController);

// POST /admin/add-product
router.post('/add-product', productController.saveProduct);

module.exports = router;
