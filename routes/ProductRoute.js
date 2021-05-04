const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getOneProduct);
router.post('/', ProductController.addProduct);

module.exports = router;
