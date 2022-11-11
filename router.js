const router = require('express').Router();

////Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
//const ArticleRouter = require('./views/ArticleRouter');

////Rutas
router.use('/movies', MovieRouter);
//router.use('/articles', ArticleRouter);

module.exports = router;