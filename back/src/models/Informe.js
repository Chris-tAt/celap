const {DataTypes} = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define('Informe', {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        fecha:  {type: DataTypes.STRING, allowNull: false},
        texto: {type: DataTypes.TEXT, allowNull: false},
       
        

    }, {timestamps: false})
}