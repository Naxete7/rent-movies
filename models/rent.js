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
      rent.belongsToMany(models.article, { through: 'rentarticle', foreignKey: 'rentId' });
            rent.belongsTo(models.usuario);
    }
  }
  rent.init({
    type: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'rent',
  });
  return rent;
};