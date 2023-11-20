const {Router} = require('express')
const {
    getAllPacientesHandler,
    detailPacienteHandler,
    createPacienteHandler,
    deletePacienteHandler,
    editPacienteHandler,
    loginPacienteHandler
} = require('../Handlers/pacienteHandler')

const router = Router();
//esta ruta es para traer la lista de todos los pacientes
router.get("/pacientes", getAllPacientesHandler);

//esta ruta es para traer los detalles de un solo paciente
router.get("/unPaciente", detailPacienteHandler);

//esta ruta es para crear paciente
router.post("/crearPaciente", createPacienteHandler);

//esta ruta es para eliminar un paciente
router.delete("/deletePaciente", deletePacienteHandler);

//esta ruta podra editar datos de un paciente
router.put("/editarPaciente", editPacienteHandler);

//esta ruta permite iniciar sesion por el paciente
router.post("/loginPaciente", loginPacienteHandler);

//falta ruta de cambiar contraseña