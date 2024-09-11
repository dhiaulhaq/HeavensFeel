'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReservationDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ReservationId: {
        references: {
          model: {
            tableName: 'Reservations'
          },
          key: 'id'
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      deceased: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      deathDate: {
        type: Sequelize.DATE
      },
      birthPlace: {
        type: Sequelize.STRING
      },
      maintenancePrice: {
        type: Sequelize.INTEGER
      },
      additionalInfo: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReservationDetails');
  }
};