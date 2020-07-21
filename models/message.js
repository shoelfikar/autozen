'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Message.hasMany(models.User, {
      //   foreignKey: "id",
      //   as: "user",
      //   sourceKey: "user_id"
      // })
    }
  };
  Message.init({
    message: DataTypes.STRING,
    time: DataTypes.DATE,
    available: DataTypes.BOOLEAN,
    inspector_id: DataTypes.INTEGER,
    location: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    finish: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};