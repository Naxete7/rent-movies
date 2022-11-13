const db = require("../models");
const usuario = db.usuario;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var usuarioModel  = require('../models').usuario;  //Add for dependency response

const usuarioController = {}; //Create the object controller
