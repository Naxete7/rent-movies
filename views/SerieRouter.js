const express = require('express');
const router = express.Router();

const SerieController = require('../controllers/SerieController');

// End-points CRUD series
router.get('/', SerieController.getAll);
router.get('/:id', SerieController.getById);
router.get('/nombre/:title', SerieController.getByTitle);
router.get('/rank/:rank', SerieController.getTopSerie);
router.get('/theater/:theater', SerieController.getSerieTheater);
router.get('/cinema/:cinema', SerieController.getSerieCinema);
router.get('/episode_7_days/:espisode_7_days', SerieController.get7Days)
router.post('/', SerieController.create);
router.put('/:id', SerieController.update);
router.delete('/', SerieController.deleteAll);
router.delete('/:id', SerieController.delete);

module.exports = router;