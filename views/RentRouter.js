const express = require('express');
const router = express.Router();
const models = require('../models/index')

//Importo modelo de datos
const RentController = require('../controllers/RentController');


//Alquilar una película
router.post('/movie', isValidUser(), RentControllers.RentMovie)

//Alquilar una serie
router.post('/serie', isValidUser(), RentControllers.RentSerie)

//Alquileres de un usuario
router.get('/rent/mail', RentController.getRentByUser)

//Todos los Alquileres solo administrados
router.get('/', isValidRole("admin"), RentControllers.getAll)

module.exports = router;