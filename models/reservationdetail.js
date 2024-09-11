'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReservationDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReservationDetail.belongsTo(models.Reservation)
    }
  }
  ReservationDetail.init({
    ReservationId: DataTypes.INTEGER,
    deceased: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    deathDate: DataTypes.DATE,
    birthPlace: DataTypes.STRING,
    maintenancePrice: DataTypes.INTEGER,
    additionalInfo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ReservationDetail',
  });
  return ReservationDetail;
};