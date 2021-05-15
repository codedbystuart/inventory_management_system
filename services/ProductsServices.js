
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
  static async deleteProducts(id) {
    try {
      const productToDelete = await Product.findOne({where:{id:Number(id)}});  
      if(!productToDelete) return null;
      await Product.destroy({where:{id:Number(id)}});
      return productToDelete;    
    } catch (error) {
      throw error;
    }
  }

  static async productUpdate(id, updatedProduct) {
    try {
      const productToUpdate = await Product.findOne({where:{id:Number(id)}});
      if(!productToUpdate) return null;
      await Product.update(updatedProduct, {where:{id:Number(id)}});
      return productToUpdate;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
