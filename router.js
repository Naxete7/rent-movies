const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const ArticleRouter = require('./views/ArticleRouter');
//const SerieRouter = require('./views/SerieRouter');
const UsuarioRouter = require('./views/UsuarioRouter');
const RentRouter = require('/views/RentRouter.js');


//Rutas
router.use('/movie', MovieRouter);
router.use('/article', ArticleRouter);
//router.use('/serie', SerieRouter);
router.use('/usuario', UsuarioRouter);
router.use('/rent', RentRouter);

module.exports = router; 