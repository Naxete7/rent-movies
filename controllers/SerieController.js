//Importo modelo de datos
const db = require("../models");
const serie = db.serie;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 


var articleModel = require('../models').article;

const SerieController = {}; //Create the object controller



//GET todas las seires de la base de datos

SerieController.getAll = (req, res) => {
    
    serie.findAll({include: [{ model:articleModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar series."
        });
      });
};
  
//-------------------------------------------------------------------------------------
//GET series por Id de la db
SerieController.getById = (req, res) => {
    const id = req.params.id;

    serie.findByPk(id, {include: [{ model:articleModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se puede encontrar una serie con el id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al recuperar series con el id=" + id
        });
      });
};
  
//CREATE una nueva serie en la base de datos
SerieController.create = (req, res) => {
      
  if (!req.body.title) {
    res.status(400).send({
      message: "El contenido no puede estar vacío!"
    });
    return;
  }
  
      // Crear series
      const newSerie = {
        title: req.body.title,
        articleId: req.body.articleId
      };
  
      // Guardar series en la db
      serie.create(newSerie)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Ocurrió un error al crear la serie."
          });
        });
    };


  //-------------------------------------------------------------------------------------
  //UPDATE una serie de la base de datos
  SerieController.update = (req, res) => {
      const id = req.params.id;
  
      serie.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "La serie ha sido modificada con exito."
            });
          } else {
            res.send({
              message: `No se puede modificar la serie con el  id=${id}. Quizas la película no existe!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error al modificar la serie con el id=" + id
          });
        });
    };


  //-------------------------------------------------------------------------------------
  //GET serie por titulo de la db
  
    SerieController.getByTitle = (req, res) => {
      serie.findAll({ where: { title: req.params.title } })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Se produjo un error al recuperar las series."
          });
        });
    };
 //-------------------------------------------------------------------------------------
  //GET serie mejor valoradas de la db
SerieController.getTopSerie = (req, res) => {
  





  
}







  //-------------------------------------------------------------------------------------
  //DELETE una serie de la base de datos por el id
  SerieController.delete = (req, res) => {
      const id = req.params.id;
  
      serie.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "La serie ha sido borrada con éxito!"
            });
          } else {
            res.send({
              message: `No se puede borrar la serie con el id=${id}.Quizas la película no existe!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "No se puede borrar la serie con el id=" + id
          });
        });
    };


  //-------------------------------------------------------------------------------------
  //DELETE todas las series de la base de datos
 
    SerieController.deleteAll = (req, res) => {
      serie.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} series han sido borradas con exito!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Se produjo un error al eliminar todas las series."
          });
        });
    };

  module.exports = SerieController;
