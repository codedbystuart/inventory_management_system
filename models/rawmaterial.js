'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rawmaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rawmaterial.init({
    name: {
      type:DataTypes.STRING,
      allowNull: null
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: null
    }
  }, {
    sequelize,
    modelName: 'Rawmaterial',
  });
  return Rawmaterial;
};

//My Db Relations
//belongsTo, hasOne, hasMany, belongsToMany