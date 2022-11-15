const express = require('express');
const router = express.Router();

//Importo modelo de datos
const UsuarioController = require('../controllers/UsuarioController');



//Mostrar todos los usuarios
router.get("/", UsuarioController.getAll);

//Crear nuevo usuario
router.post('/', UsuarioController.create);

// Mostrar usuarios por mail
router.get("/usuario/:email", UsuarioController.getUsuarioByEmail);

// Modificar usuario
//router.patch('/updateUsuario/:mail', isValidUsuario(), UsuarioController.updateUser);

//Borrar usuario(solo puede hacerlo el admin)
//router.delete('/deleteUsuario/:mail', isValidRol("admin"), UsuarioController.deleteUser)



module.exports = router;