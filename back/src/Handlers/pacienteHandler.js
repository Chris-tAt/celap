const {
    getAllPacientesController,
    detailPacienteController,
    createPacienteController,
    deletePacienteController,
    editPacienteController,
    loginPacienteController


} = require('../Controllers/pacientecontroller')

const getAllPacientesHandler = async (req, res) => {
    try {
        const allPacientes = await getAllPacientesController()
        res.status(200).json(allPacientes)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

const detailPacienteHandler = async (req,res) => {
    try {
        const unPaciente = await detailPacienteController()
        res.status(202).json(unPaciente)
    } catch (error) {
        res.status(405).json({error: error.message})
    }
}

const createPacienteHandler = async (req, res) => {
    try {
        const crearPaciente = await createPacienteController()
        res.status(200).json(crearPaciente)
    } catch (error) {
        res.status(406).json({error: error.message})
    }
}

const deletePacienteHandler = async (req,res) => {
    try {
        const borrarPaciente = deletePacienteController(req);
        console.log(borrarPaciente)
        res.status(200).send('delete paciente')
    } catch (error) {
        res.status(408).json({ error: error.message });
    }

}

const editPacienteHandler = async (req, res) => {
    try {
        const pacienteId = req.params.id;
        const newData = req.body;

        const cambiarDatos = editPacienteController(pacienteId, newData);

        res.status(200).json(cambiarDatos)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const loginPacienteHandler = async (req, res) => {
    try {
        const {email, contraseña} = req.body;
        const loginPaciente = await loginPacienteController(email, contraseña);
        res.status(200).json(loginPaciente)
    } catch (error) {
        res.status(408).json({ error: error.message });
    }
}


module.exports = {
    getAllPacientesHandler,
    detailPacienteHandler,
    createPacienteHandler,
    deletePacienteHandler,
    editPacienteHandler,
    loginPacienteHandler
}