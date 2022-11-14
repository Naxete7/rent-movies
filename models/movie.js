'use strict';
const {Model} = require('sequelize');
const article = require('./article');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movie.belongsTo(models.rent, {
        foreignKey: 'articleId'
      });
    }
  };
  movie.init({
    title: DataTypes.STRING,
     genre: DataTypes.STRING,
    date: DataTypes.DATE,
    poster: {
           type: DataTypes.STRING,
          len: [1, 300],
            },
    rank: DataTypes.INTEGER,
    articleId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};