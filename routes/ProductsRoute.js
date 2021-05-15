const express = require('express');
const productsController = require('../controllers/ProductsController');

const router = express.Router();
router.post('/addproduct',productsController.addProduct);



module.exports = router;