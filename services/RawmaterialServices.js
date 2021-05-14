const db = require('../models');

const { Rawmaterial } = db;

class RawmaterialServices {
static async findMaterialbyName (name) {
  try {
    const material = await Rawmaterial.findOne({where: {name}});
  return material;
  } catch (error) {
    throw error;
  }
}
static async createMaterial (material) {
  try {
    const rawMaterial = await Rawmaterial.create(material);
    return rawMaterial;
  } catch (error) {
    throw error;
  }
}
static async getAllMaterials () {
  try {
    const rawmaterials = await Rawmaterial.findAll();
    return rawmaterials;
  } catch (error) {
    throw error;
  }
}
}

module.exports = RawmaterialServices;