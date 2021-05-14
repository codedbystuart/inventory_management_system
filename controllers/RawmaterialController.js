const { Model } = require('sequelize');
const RawmaterialServices = require('../services/RawmaterialServices');

class RawmaterialController {
static async addRawmaterial (req, res, next) {
  try {
    const rawMaterial = {
      name: req.body.name,
      cost: req.body.cost
    }
    const ifRawmaterialExist = await RawmaterialServices.findMaterialbyName(req.body.name);
    if(ifRawmaterialExist){
      return res.status(409).json({
        status: res.statusCode,
        message: 'Material already exists'
      });
    } else {
      const addRawmaterial = await RawmaterialServices.createMaterial(rawMaterial);
      return res.status(201).json({
        status: res.statusCode,
        message: 'Rawmaterial added successfully',
        rawmaterial : addRawmaterial
      });
    }
  } catch (error) {
    return next(error);
  }
}
static async getRawmaterials (req, res, next) {
  try {
    const rawmaterials = await RawmaterialServices.getAllMaterials();
    if(!rawmaterials) {
      return res.status(404).json({
        status: res.statusCode,
        message: 'Not rawmaterials found. Table empty'
      });
    } else {
      return res.status(200).json({
        status: res.statusCode,
        data: rawmaterials
      });
    }
  } catch (error) {
    return next(error);
  }
}
}

module.exports = RawmaterialController;