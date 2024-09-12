'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Grave.hasMany(models.Reservation)
      Grave.belongsTo(models.Cemetery)
    }
  }
  Grave.init({
    CemeteryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    holes: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Grave',
  });
  return Grave;
};