'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.movie,{
        foreignKey:'articleId'
      });
      this.hasMany(models.serie,{
        foreignKey:'articleId'
      });
      article.belongsToMany(models.rent, { through: 'rentarticle', foreignKey: 'articleId' })
    }
  };
  article.init({
    type: DataTypes.STRING,
    age: DataTypes.INTEGER,
   rentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};