const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./views/MovieRouter');
const SerieRouter = require('./views/SerieRouter');
const UsuarioRouter = require('./views/UsuarioRouter');
const RentRouter = require('./views/RentRouter');
const AuthRouter = require('./views/AuthRouter');

//Rutas
router.use('/movies', MovieRouter);
router.use('/series', SerieRouter);
router.use('/usuarios', UsuarioRouter);
router.use('/rent', RentRouter);
router.use('/auth', AuthRouter);

module.exports = router; 