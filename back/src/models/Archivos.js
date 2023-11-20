const {DataTypes} = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('Archivo', {
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
        tipo: {type: DataTypes.STRING,allowNull: true},
        area: {type: DataTypes.STRING,allowNull: true},

    }, {timestamps: false})
}