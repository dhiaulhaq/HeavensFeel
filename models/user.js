'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Reservation)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Nama tidak ada'
        },
        notEmpty: {
          args: true,
          msg: 'Nama tidak boleh kosong'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Email tidak ada'
        },
        notEmpty: {
          args: true,
          msg: 'Email tidak boleh kosong'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password tidak ada'
        },
        notEmpty: {
          args: true,
          msg: 'Password tidak boleh kosong'
        }
      }
    },
    role: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Alamat tidak ada'
        },
        notEmpty: {
          args: true,
          msg: 'Alamat tidak boleh kosong'
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Nomor Telepon tidak ada'
        },
        notEmpty: {
          args: true,
          msg: 'Nomor Telepon tidak boleh kosong'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};