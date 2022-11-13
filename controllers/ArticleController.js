//Importo modelo de datos
const db = require("../models");
const article = require("../models/article");
//const article = db.article;
const Op = db.Sequelize.Op; //Import all ORM sequelize functions 

const ArticleController = {}; //Create the object controller


//CRUD end-points Functions
//-------------------------------------------------------------------------------------
//GET all categories from database
ArticleController.getAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { [Op.like]: `%${type}%` } } : null;
  
    article.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar los artículos."
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET categories by Id from database
ArticleController.getById = (req, res) => {
    const id = req.params.id;
  
    article.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se ha encontrado ningun artículo con el id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al recuperar los articulos con id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//CREATE un nuevo articulo en la base de datos
ArticleController.create = (req, res) => {
    
    if (!req.body.type) {
      res.status(400).send({
        message: "El contenido no puede estar vacío!"
      });
      return;
    }
  
    // Create un articulo
    const newArticle = {
      type: req.body.type,
      age: req.body.age
    };
  
    //Guardar un articulo en la base de datos
    article.create(newArticle)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al crear el nuevo artículo."
        });
      });
  };


//-------------------------------------------------------------------------------------
//UPDATE un articulo de la base de datos
ArticleController.update = (req, res) => {
    const id = req.params.id;
  
    article.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "El artículo se ha modificado correctamente."
          });
        } else {
          res.send({
            message: `No se puede modificar el artículo con id=${id}. Tal vez no se encontró la película o req.body está vacío!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al actualizar el artículo con el id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//GET articulos por tipo desde la base de datos  
//FindByType
ArticleController.getByType = (req, res) => {
    article.findAll({ where: { type: req.params.type } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar los artículos."
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE un artículo por Id desde la base de datos
ArticleController.delete = (req, res) => {
    const id = req.params.id;
  
    article.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "El artículo fue borrado satisfactoriamente!"
          });
        } else {
          res.send({
            message: `No se ha podido borrar el artículo con el id=${id}. Quizas la película no exista!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo eliminar el artículo con id=" + id
        });
      });
  };


//-------------------------------------------------------------------------------------
//DELETE todos los articulos de la base de datos
//delete all categories   
ArticleController.deleteAll = (req, res) => {
    article.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} articulos han sido borrados satisfactoriamente!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al eliminar todas los artículos."
        });
      });
  };

module.exports = ArticleController;