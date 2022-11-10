'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rentarticle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.article.belongsToMany(models.rent, { through: 'rentarticles' });
       models.rent.belongsToMany(models.article, { through: 'rentarticles' });
    }
  }
  rentarticle.init({
    rentId: DataTypes.INTEGER,
    articleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rentarticle',
  });
  return rentarticle;
};