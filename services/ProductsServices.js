
const db = require('../models');
const { Product } = db;

class ProductServices {

  static async findProductbyName (name) {
    try {
    const product = await Product.findOne({where:{name}});
    return product;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
