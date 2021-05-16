'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sale.init({
    product: {
      type:DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    totalprice: {
      type:DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};