const express = require('express');
const productsController = require('../controllers/ProductsController');
const { route } = require('./UserRoute');

const router = express.Router();
router.post('/addproduct',productsController.addProduct);
router.get('/products',productsController.getProducts);



module.exports = router;