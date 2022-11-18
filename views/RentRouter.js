const express = require('express');
const router = express.Router();
const models = require('../models/index')
//Importo modelo de datos
const RentController = require('../controllers/RentController');
//Importo Middleware para las funciones unicas del administrador
//const {isValidUser, isValidRole} = require('../middlewares/auth')

//Alquilar una película
router.post('/movie', isValidUser(), RentController.RentMovie)

////Alquilar una serie
//router.post('/serie', isValidUser(), RentController.RentSerie)

////Modificar un pedido
//router.put('/:id', isValidUser(), RentController.update)

////Alquileres de un usuario
//router.get('/rent/mail', RentController.getRentByUser)

////Todos los Alquileres solo administrados
//router.get('/', isValidRole("admin"), RentController.getAll)

module.exports = router;