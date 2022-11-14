const express = require('express');
const router = express.Router();

//Importo modelo de datos
const UsuarioController = require('../controllers/UsuarioController');


//Crear nuevo usuario


// Mostrar usuarios por mail
router.get("/user/:mail", isValidUser(), UsuarioController.getUserByMail);

// Modificar usuario
router.patch('/updateUser/:mail', isValidUser(), UsuarioController.updateUser);

//Borrar usuario(solo puede hacerlo el admin)
router.delete('/deleteUser/:mail', isValidRole("admin"), UsuarioController.deleteUser)



module.exports = router;