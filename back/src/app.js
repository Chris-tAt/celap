const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload");




 // medeware
app.use(morgan("dev"));// PARA VERIFICAR  LOS DATOS 
app.use(express.json());// TRADUCTOR DE CLIENTES A SERVIDO
app.use(fileUpload({
    useTempFiles:true,
    tempFileDirectory:'./uploads'
 }))

app.use(cors());
app.use(express.urlencoded({ extended: true }));
// es es para  eero de variables

app.use(router);

module.exports = {app};