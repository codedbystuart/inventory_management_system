const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express();

router.get('/', ProductController.getAllProducts);

module.exports = router;
