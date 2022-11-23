const express = require('express');
const router = express.Router();
const models = require('../models/index')
//Importo modelo de datos
const RentController = require('../controllers/RentController');
//Importo Middleware para las funciones unicas del administrador
const isValidUser = require('../middlewares/auth')

//Alquilar una película
router.post('/movie', isValidUser, RentController.RentMovie)

//Alquilar una serie
router.post('/serie', isValidUser, RentController.RentSerie)

//Ver todos los Alquileres
router.get('/', RentController.getAll)

module.exports = router;