'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
                 rent.belongsTo(models.usuario);
                rent.belongsTo(models.article);
    }
  }
  rent.init({
    usuarioId: DataTypes.INTEGER,
    articleId: DataTypes.INTEGER  }, {
    sequelize,
    modelName: 'rent',
  });
  return rent;
};