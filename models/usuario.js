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
    n: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    pasword: DataTypes.STRING,
    rolId: {
      type: sequelize.INTEGER,
      references: {
        model: 'rols',
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};