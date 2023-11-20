const {DataTypes} = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('Admin', {
        id: {
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
          email: {type: DataTypes.STRING, allowNull: false},
          contraseña: {type: DataTypes.STRING,allowNull: false},

    }, {timestamps: false})
}