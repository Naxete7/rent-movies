const db = require("../models");
const rent = db.rent;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var rentModel  = require('../models').rent;  //Add for dependency response

const rentController = {}; //Create the object controller