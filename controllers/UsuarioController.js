const db = require("../models");
const usuario = db.usuario;
const Op = db.Sequelize.Op; 
const models = require("../models/index"); 
const UsuarioController = {}; 
//const jsonwebtoken = require("jsonwebtoken");


//Mostrar todos los Usuarios
UsuarioController.getAll = (req, res) => {
    
    usuario.findAll({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Se produjo un error al recuperar los usuario."
        });
      });
  };

  //Mostrar usuario por mail
UsuarioController.getUsuarioByEmail = async (req, res) => {
    try {
        let email = req.params.email
        let resp = await usuario.findOne({
            where: { email: email }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}





module.exports = UsuarioController;