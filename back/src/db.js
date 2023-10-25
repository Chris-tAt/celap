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
//   Usuario,
//   Empresas,
//   NivelJerarquico,
//   Tarea,
//   WorkFlow,
//   Plan,
//   Sector,
//   Paises,
//   ContactoVentas,
//   Archivos,
//   ArchivoTareas,
//   Testimonios
} = sequelize.models;


// Aca vendrian las relaciones

//  RELACIONES

// Aca vendrian las relaciones
// Tarea.hasMany(ArchivoTareas, { foreignKey: 'tareaId' });
// ArchivoTareas.belongsTo(Tarea, { foreignKey: "tareaId" });

// Testimonios.belongsTo(Usuario, { foreignKey: 'usuarioId' });

// Empresas.belongsTo(Plan, { foreignKey: 'planId' });//uno a muchos
// Plan.hasMany(Empresas, { foreignKey: "planId" }); //uno a muchos
// WorkFlow.hasMany(Archivos, { foreignKey: "workFlowId" }); //uno a uno
// WorkFlow.hasOne(Archivos, { foreignKey: "workflowsId" }); //uno a uno
// Empresas.hasMany(Usuario, { foreignKey: "empresasId" }); //uno a muchos
// Empresas.hasMany(WorkFlow, { foreignKey: "empresasId" }); //uno a muchos
// //muchos a muchos
// Usuario.belongsToMany(Tarea, { through: "usuarioTarea" });
// Tarea.belongsToMany(Usuario, { through: "usuarioTarea" });
// //muchos a muchos
// Usuario.belongsToMany(WorkFlow, { through: "usuarioWorkFlow" });
// WorkFlow.belongsToMany(Usuario, { through: "usuarioWorkFlow" });




module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};