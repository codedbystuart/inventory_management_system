
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
  static async createProduct(product) {
    try {
      const productToCreate = await Product.create(product);
      return productToCreate;
    } catch (error) {
      throw error;
    }
  }
  static async findProductbyId (id) {
    try {
      const product = await Product.findOne({where:{id:Number(id)}});
      if(!product) return null;
      return product;
    } catch (error) {
      throw error;
    }
  }
  static async getAllProducts(){
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
