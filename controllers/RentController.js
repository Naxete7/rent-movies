const db = require("../models");
const rent = db.rent;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 
//var rentModel  = require('../models').rent;  //Add for dependency response
const RentController = {}; //Create the object controller
const models = require("../models/index");

//Alquilar una pelicula

RentController.RentMovie= async(req,res)=>{   
  try {
    
    let resp= await rent.create({
               usuarioId: req.body.usuarioId,
                articleId: req.body.articleId
            })

            res.send(resp);
}
        catch(error) {res.send(error)}
        }

        

//Alquilar una serie
RentController.RentSerie= async(req,res)=>{   
  try {
    
    let resp= await rent.create({
               usuarioId: req.body.usuarioId,
                articleId: req.body.articleId
            })

            res.send(resp);
}
        catch(error) {res.send(error)}
        }

        


//------------------------------------------------------------------------------------------------------------
//Mostrar todos los pedidos

RentController.getAll = (req, res) => {

  rent.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });

};

module.exports = RentController;