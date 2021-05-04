const db = require('../models');
const { Product } = db;

class ProductService {
  static async getAllProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }

  static async getOneProduct(id) {
    try {
      const product = await Product.findOne({ where: { id: Number(id) } });
      if (!product) return null;
      return product;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProductService;
