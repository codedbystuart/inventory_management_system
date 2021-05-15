
const ProductServices = require('../services/ProductsServices');

class ProductsController{

  static async addProduct(req, res, next) {
   try {
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
   } catch (error) {
     return next(error);
   }
  }

  static async getProducts(req,res, next) {
    try {
      const products = await ProductServices.getAllProducts();
    if(!products){
      return res.status(404).json({
        status: res.statusCode,
        message: 'No products found'
      });
    } else {
      return res.status(200).json({
        status: res.statusCode,
        Products: products
      });
    }
    } catch (error) {
      return next(error);
    }
  }

}

module.exports = ProductsController;
