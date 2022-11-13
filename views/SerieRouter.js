const express = require('express');
const router = express.Router();

const SerieController = require('../controllers/SerieController');

// End-points CRUD series
router.get('/', SerieController.getAll);
router.get('/:id', SerieController.getById);
router.get('/nombre/:title', SerieController.getByTitle);
router.get('/rank', SerieController.getTopMovies);
router.get('/theater', SerieController.getSerieTheater);
router.get('/cinema', SerieController.getSerieCinema);
router.post('/', SerieController.create);
router.put('/:id', SerieController.update);
router.delete('/', SerieController.deleteAll);
router.delete('/:id', SerieController.delete);

module.exports = router;