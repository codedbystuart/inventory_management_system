const { Model } = require('sequelize');
const RawmaterialServices = require('../services/RawmaterialServices');

class RawmaterialController {
static async addRawmaterial (req, res, next) {
  try {
    const rawMaterial = {
      name: req.body.name,
      cost: req.body.cost
    }
    const ifRawmaterialExist = await RawmaterialServices.findMaterialbyName(rawMaterial.name);
    if(ifRawmaterialExist){
      return res.status(409).json({
        status: res.statusCode,
        message: 'Material already exists'
      });
    } else {
      const addRawmaterial = await RawmaterialServices.createMaterial(ifRawmaterialExist);
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
}

module.exports = RawmaterialController;