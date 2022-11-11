'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      serie.belongsTo(models.article, {
        foreignKey: 'articleId'
      });
    }
  }
  serie.init({
    title: DataTypes.STRING,
     espisode_7_days: DataTypes.BOOLEAN,
      episodes: DataTypes.INTEGER,
      seasons: DataTypes.INTEGER,
      rank: DataTypes.FLOAT,
      cinema: DataTypes.BOOLEAN,
      theater: DataTypes.BOOLEAN,
    categoryId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'serie',
  });
  return serie;
};