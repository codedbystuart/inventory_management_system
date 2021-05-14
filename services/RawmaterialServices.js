const db = require('../models');

const { Rawmaterial } = db;

class RawmaterialServices {
static async findMaterialbyName (name) {
  try {
    const material = await Rawmaterial.findOne({where: {name:name}});
  if(!material) return null;
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

}

module.exports = RawmaterialServices;