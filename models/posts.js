'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Posts.init({
    message: DataTypes.STRING,
    time: DataTypes.DATE,
    available: DataTypes.BOOLEAN,
    inspector: DataTypes.STRING,
    user: DataTypes.STRING,
    finish: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};