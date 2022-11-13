//Importo modelo de datos
const db = require("../models");
const serie = db.serie;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

var serieModel  = require('../models').serie  //Add for dependency response

const SerieController = {}; //Create the object controller




// Encuentra las series por capitulo emitido

SerieController.getSeriesEmitido = async (req,res) =>{
    try {
          let resp = await models.series.findAll({
              where:{
                espisode_7_days: true
                  }
              }
          );
          res.send(resp);
        } catch (error) {
          res.send(error);        
  }}