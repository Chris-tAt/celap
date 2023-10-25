const {app} = require("./src/app");
const PORT = 3008;
const { conn } = require("./src/db");

conn
  .sync({ force: true })
  .then(() => console.log("conectado en la base de datos  DB"));
app.listen(PORT, () => {
  console.log(`estas en puerto  ${PORT} `);
});