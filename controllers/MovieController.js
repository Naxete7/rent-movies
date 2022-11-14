//Importo modelo de datos
const db = require("../models");
const movie = db.movie;
const Op = db.Sequelize.Op;  

var articleModel = require('../models').article;  

const MovieController = {}; 


//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET todas las peliculas de la base de datos
MovieController.getAll = (req, res) => {
    
    movie.findAll({include: [{ model:articleModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar películas."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET películas por Id de la db
MovieController.getById = (req, res) => {
    const id = req.params.id;

    movie.findByPk(id, {include: [{ model:articleModel}]})
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se puede encontrar una pelicula con el id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al recuperar peliculas con el id=" + id
        });
      });
  };



//-------------------------------------------------------------------------------------
//CREATE una nueva película en la base de datos
MovieController.create = (req, res) => {
      
  if (!req.body.title) {
    res.status(400).send({
      message: "El contenido no puede estar vacío!"
    });
    return;
  }
  
      // Crear películas
      const newMovie = {
        title: req.body.title,
        articleId: req.body.articleId
      };
  
      // Guardar peliculas en la db
      movie.create(newMovie)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Ocurrió un error al crear la película."
          });
        });
    };


  //-------------------------------------------------------------------------------------
  //UPDATE una peli de la base de datos
  MovieController.update = (req, res) => {
      const id = req.params.id;
  
      movie.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "La película ha sido modificada con exito."
            });
          } else {
            res.send({
              message: `No se puede modificar la película con el  id=${id}. Quizas la película no existe!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error al modificar la pleícula con el id=" + id
          });
        });
    };


  //-------------------------------------------------------------------------------------
  //GET película por titulo de la db
  
    MovieController.getByTitle = (req, res) => {
      movie.findAll({ where: { title: req.params.title } })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Se produjo un error al recuperar las peliculas"
          });
        });
};
    
//-------------------------------------------------------------------------------------
  //GET película por ranking de la db
MovieController.getByRank = (req, res) => {
  movie.findAll({ where: { rank: req.params.rank } })
  .then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al buscar las peliculas mejor valoradas"
      });
    });
}


  //-------------------------------------------------------------------------------------
  //DELETE una película de la base de datos por el id
  MovieController.delete = (req, res) => {
      const id = req.params.id;
  
      movie.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "La película ha sido borrada con éxito!"
            });
          } else {
            res.send({
              message: `No se puede borrar la película con el id=${id}.Quizas la película no existe!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "No se puede borrar la película con el id=" + id
          });
        });
    };


  //-------------------------------------------------------------------------------------
  //DELETE todas las peliculas de la base de datos
 
    MovieController.deleteAll = (req, res) => {
      movie.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} películas han sido borradas con exito!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Se produjo un error al eliminar todas las películas."
          });
        });
    };

  module.exports = MovieController;
