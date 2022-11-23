const { usuario } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const AuthController = {}; //Create the object controller

//-------------------------------------------------------------------------------------
//Login usuario with database
//get usuario
AuthController.signIn = (req, res) =>{
        let { email, password } = req.body;
        // Buscar usuario
        usuario.findOne({ where: { email: email }
        }).then(usuario => {
            if (!usuario) {
                res.status(404).json({ msg: "Usuario con este correo no encontrado" });
            } else {
                if (bcrypt.compareSync(password, usuario.password)) {
                    // Creamos el token
                    let token = jwt.sign({ usuario: usuario }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });

                    res.json({
                        usuario: usuario,
                        token: token
                    })
                } else {
                    // Unauthorized Access
                    res.status(401).json({ msg: "Contraseña incorrecta" })
                }
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    };


//-------------------------------------------------------------------------------------
//REGISTER new usuario in database
//create usuario
AuthController.signUp = (req, res)=> {

        // Encriptamos la contraseña
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));

        // Crear un usuario
        usuario.create({
            nombre: req.body.nombre,
            apellido:req.body.apellido,
            email: req.body.email,
            password: password,
            rolId: req.body.rolId
        }).then(usuario => {

            // Creamos el token
            let token = jwt.sign({ usuario: usuario }, authConfig.secret, {
                expiresIn: authConfig.expires
            });

            res.json({
                usuario: usuario,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });

       

    };

module.exports = AuthController;