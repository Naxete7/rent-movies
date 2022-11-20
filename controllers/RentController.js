const db = require("../models");
const rent = db.rent;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 
var rentModel  = require('../models').rent;  //Add for dependency response
const RentController = {}; //Create the object controller


//Nuevo pedido
RentControllers.RentMovie = async (req, res) => {
  try {
    let body = req.body;
    delete body.date
    delete body.end_date
    if (body.email === req.auth?.email) {
      let movie = await models.Movie.findOne({
        where: { title: body.name }
      })
      let repeated = await models.Rent.findOne({
        where: {
          UsuarioId: req.auth.id,
          ArticleId: movie.ArticleId,
          end_date: null
        }
      })
      if (!repeated) {
        let resp = await models.Rent.create({
          date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
          end_date: null,
          UsuarioId: req.auth.id,
          ArticleId: movie.ArticleId
        })
        res.status(200).json({
          resp,
          email: req.auth?.email,
          message: "ALquiler realizado!"
        })
      } else {
        res.json({
          message: "No ha podido alquilar la película"
        })
      }
    }
  } catch (error) {
    res.json({ message: "Error" })
    console.error(error)
  }

}








//-----------------------------------------------------------------------------------------------------
//Modificar pedido








//------------------------------------------------------------------------------------------------------------
//Mostrar todos los pedidos (solo administrador)

RentController.getAll = (req, res) => {
   const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;


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








//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Mostrar pedidos de un usuario





















module.exports = RentController;