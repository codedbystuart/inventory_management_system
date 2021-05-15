
const ProductServices = require('../services/ProductsServices');

class ProductsController{

  static async addProduct(req, res, next) {
    const productToAdd = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    }
    const ifProductExist = await ProductServices.findProductbyName(req.body.name);
    if(ifProductExist) {
      return res.status(409).json({
        status: res.statusCode,
        message: 'Product already exists'
      });
    } else {
      await ProductServices.createProduct(productToAdd);
      return res.status(201).json({
        status: res.statusCode,
        message: 'Product successfully Added',
        product: productToAdd
      });
    }
  }
}

module.exports = ProductsController;
