const ProductService = require('../services/ProductService');

class ProductController {
  static async getAllProducts(req, res, next) {
    try {
      const products = await ProductService.getAllProducts();
      if (products.length < 1) {
        return res.status(200).json({
          status: res.statusCode,
          message: 'Sorry, no products have been added yet'
        });
      }
      return res.status(200).json({
        status: res.statusCode,
        data: products
      });
    } catch (error) {
      return next(error);
    }
  }
};

module.exports = ProductController;
