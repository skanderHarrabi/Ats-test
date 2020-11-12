const express = require('express');
const multer = require('multer');
const router = express.Router();
const productsController = require('../controllers/products.controller.js');

router.post('/products', productsController.products);
router.get('/products', productsController.allProducts);

module.exports = router;
