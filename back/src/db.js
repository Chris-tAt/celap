require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/celap`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "./models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "./models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
Admin,
Archivo,
Area,
Informe,
Paciente,
Terapeuta
} = sequelize.models;


// Aca vendrian las relaciones

//  RELACIONES

// Aca vendrian las relaciones
// En el modelo Paciente
Paciente.hasMany(Informe, { foreignKey: 'pacienteId' });

// En el modelo Informe
Informe.belongsTo(Paciente, { foreignKey: 'pacienteId' });
Informe.belongsTo(Terapeuta, { foreignKey: 'terapuetaId' });


// En el modelo Archivo
Archivo.belongsTo(Paciente, { foreignKey: 'pacienteId' });
Archivo.belongsToMany(Terapeuta, { as: 'VoluntariosComparten', through: 'CompartenArchivos' });


// En el modelo Terapeuta
Terapeuta.belongsToMany(Paciente, { through: 'AsignacionTerapeuta', foreignKey: 'terapeutaId' });
Paciente.belongsToMany(Terapeuta, { through: 'AsignacionTerapeuta', foreignKey: 'pacienteId' });

// En el modelo Area-teraputa
Area.belongsToMany(Terapeuta, { through: 'AsignacionTerapeuta', foreignKey: 'areaId' });
Terapeuta.belongsToMany(Area, { through: 'AsignacionTerapeuta', foreignKey: 'terapeutaId' });

// En el modelo Paciente
Paciente.belongsToMany(Terapeuta, { through: 'AsignacionTerapeuta', foreignKey: 'pacienteId' });
Terapeuta.belongsToMany(Paciente, { through: 'AsignacionTerapeuta', foreignKey: 'terapeutaId' });

// En el modelo Area-paciente
Paciente.belongsToMany(Area, { through: 'AsignacionPacienteArea', foreignKey: 'pacienteId' });
Area.belongsToMany(Paciente, { through: 'AsignacionPacienteArea', foreignKey: 'areaId' });



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};