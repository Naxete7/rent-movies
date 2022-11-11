const express = require('express');
const router = express.Router();

//Importo modelo de datos
const ArticleController = require('../controllers/ArticleController');

// End-points CRUD movies
router.get('/', ArticleController.getAll);
router.get('/:id', ArticleController.getById);
router.get('/type/:type', ArticleController.getByType);
router.post('/', ArticleController.create);
router.put('/:id', ArticleController.update);
router.delete('/', ArticleController.deleteAll);
router.delete('/:id', ArticleController.delete);

module.exports = router;