const express = require('express');
const productsController = require('../controllers/ProductsController');

const router = express.Router();
router.post('/addproduct',productsController.addProduct);
router.get('/products',productsController.getProducts);
router.get('/products/:id',productsController.getSingleProduct);
router.delete('/deleteproduct/:id',productsController.deleteProduct);
router.patch('/updateproduct/:id',productsController.updateProduct);

module.exports = router;