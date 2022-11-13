const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const ArticleRouter = require('./views/ArticleRouter');
const SerieRouter = require('./views/SerieRouter');


//Rutas
router.use('/movie', MovieRouter);
router.use('/article', ArticleRouter);
router.use('/serie', SerieRouter);


module.exports = router; 