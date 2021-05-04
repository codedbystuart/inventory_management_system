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
  };

  static async getOneProduct(id) {
    try {
      const product = await Product.findOne({ where: { id: Number(id) } });
      if (!product) return null;
      return product;
    } catch (error) {
      throw error;
    }
  };

  static async updateProduct(id, updatedProduct) {
    try {
      const product = await Product.findOne({ where: { id: Number(id) } });
      if (!product) return null;
      await Product.update(updatedProduct, { where: { id: Number(id) } });
      return product;
    } catch (error) {
      throw error;
    }
  };

  static async deleteProduct(id) {
    try {
      const productToDelete = await Product.findOne({ where: { id: Number(id) } });
      if (!productToDelete) return null;
      await Product.destroy({ where: { id: Number(id) } });
      return productToDelete;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = ProductService;
