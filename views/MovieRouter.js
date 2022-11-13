const express = require('express');
const router = express.Router();
const models = require('../models/index')

//const db = require('../db/db');
//Importo modelo de datos
const MovieController = require('../controllers/MovieController');

// End-points CRUD movies
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/nombre/:title', MovieController.getByTitle);
router.post('/', MovieController.create);
router.put('/:id', MovieController.update);
router.delete('/', MovieController.deleteAll);
router.delete('/:id', MovieController.delete);

module.exports = router;