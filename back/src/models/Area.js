const {DataTypes} = require ('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('Area', {
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
        Archivos: {type: DataTypes.STRING, allowNull: false},
       

    }, {timestamps: false})
}