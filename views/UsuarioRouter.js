const express = require('express');
const router = express.Router();

//Importo modelo de datos
const UsuarioController = require('../controllers/UsuarioController');



//Mostrar todos los usuarios
router.get("/", UsuarioController.getAll);


// Mostrar usuarios por mail
router.get("/usuarios/:email", UsuarioController.getUsuarioByEmail);



//Borrar usuario(solo puede hacerlo el admin)
//router.delete('/deleteUsuario/:mail', isValidRol("admin"), UsuarioController.deleteUser)



module.exports = router;