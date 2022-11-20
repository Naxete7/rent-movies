const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { usuario } = require('../models/index');

module.exports = (req, res, next) => {

    // Comprobando que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {

        // Comprobando la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        // Comprobando la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                
                usuario.findByPk(decoded.usuario.id, { include: "rols" }).then(usuario => {
                    
                    req.usuario = usuario;
                    next();
                });
            }

        })
    }

}