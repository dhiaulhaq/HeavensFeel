'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.belongsTo(models.User)
      Reservation.belongsTo(models.Cemetery)
      Reservation.belongsTo(models.Grave)
      Reservation.hasOne(models.ReservationDetail)
    }
  }
  Reservation.init({
    UserId: DataTypes.INTEGER,
    CemeteryId: DataTypes.INTEGER,
    GraveId: DataTypes.INTEGER,
    reservationDate: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};