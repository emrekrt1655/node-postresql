const { Sequelize, DataTypes } = require("sequelize");
const { DB_USERNAME, DB_PASSWORD, DB_PORT, DB_HOSTNAME,  DB_NAME } = process.env; 
const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`
);
sequelize
  .authenticate()
  .then(() => console.log("Successfully connected to database"))
  .catch((err) => console.log("Unable to connect to database", err));

 const UserModel = sequelize.define("recruiter", {
      firstName: {
          type: DataTypes.STRING,
          allowNull:false
      },
      lastName: {
          type: DataTypes.STRING,
          allowNull:false
      }
  },
  {
    freezeTableName: true,
  });

  module.exports = UserModel;