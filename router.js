const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const ArticleRouter = require('./views/ArticleRouter');

//Rutas
router.use('/movie', MovieRouter);
router.use('/article', ArticleRouter);

module.exports = router;