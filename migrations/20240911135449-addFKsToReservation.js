'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return [
      await queryInterface.addColumn('Reservations', 
        'UserId', {
          references: {
            model:{
              tableName: 'Users'
            },
            key: 'id'
          },
          allowNull: false,
          type: DataTypes.INTEGER
        }
      ),
      await queryInterface.addColumn('Reservations', 
        'CemeteryId', {
          references: {
            model:{
              tableName: 'Cemeteries'
            },
            key: 'id'
          },
          allowNull: false,
          type: DataTypes.INTEGER
        }
      ),
      await queryInterface.addColumn('Reservations', 
        'GraveId', {
          references: {
            model:{
              tableName: 'Graves'
            },
            key: 'id'
          },
          allowNull: false,
          type: DataTypes.INTEGER
        }
      ),
    ]
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return [
      await queryInterface.removeColumn('Reservations', 'UserId'),
      await queryInterface.removeColumn('Reservations', 'CemeteryId'),
      await queryInterface.removeColumn('Reservations', 'GraveId')
    ]
  }
};
