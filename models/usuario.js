'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.hasMany(models.rent);
      usuario.belongsTo(models.rol, {foreignKey:'rolId'});
      
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'rol',
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};