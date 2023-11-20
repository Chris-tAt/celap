const {DataTypes} = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define ('Paciente', {
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
        fechaNacimiento: {type: DataTypes.STRING, allowNull: false},
        email: {type: DataTypes.STRING, allowNull: false},

        contraseña: {type: DataTypes.STRING,allowNull: false},
        telefono: {type: DataTypes.STRING,allowNull: false},
        DNI: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
          },
        Direccion: {type: DataTypes.STRING,allowNull: false},

        Padre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
        Madre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
        tipoVivienda: {type: DataTypes.STRING,allowNull: false},
        trabajoPadre:{type: DataTypes.STRING,allowNull: false},
        trabajoMadre: {type: DataTypes.STRING,allowNull: false},
        fechaIngreso: {type: DataTypes.STRING,allowNull: false},
        fechaSalida: {type: DataTypes.STRING,allowNull: true},
        area: {type: DataTypes.STRING,allowNull: true},
        terapeuta: {type: DataTypes.STRING,allowNull: true},
        informe: {type: DataTypes.STRING,allowNull: true},
        imagen: {type: DataTypes.STRING,allowNull: true},
    }, {timestamps: false })
}