const {DataTypes} = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('Terapeuta', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          email: {type: DataTypes.STRING, allowNull: false},
          contraseña: {type: DataTypes.STRING,allowNull: false},
          telefono: {type: DataTypes.STRING,allowNull: false},
          DNI: {
              type: DataTypes.INTEGER,
              allowNull: false,
              unique: true,
            },
          Direccion: {type: DataTypes.STRING,allowNull: false},
        fechaNacimiento: {type: DataTypes.STRING,allowNull: true},
        profesion: {type: DataTypes.STRING,allowNull: true},
        fechaIngreso: {type: DataTypes.STRING,allowNull: true},
        imagen: {type: DataTypes.STRING,allowNull: true},

    }, {timestamps: false})
}