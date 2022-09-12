const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

//create our Post model
class Post extends Model { }

// create fields/columns for Post model  --  TO BE DISCUSSED for FIELDS
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieDescription: {
      type: DataTypes.STRING,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    // THIS WILL BE THE USER ID OF THE PERSON LEAVIN THE COMMENT
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
