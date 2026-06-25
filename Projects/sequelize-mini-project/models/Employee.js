const Sequelize = require("sequelize");
const sequelize = require("../config");

const Employee = sequelize.define("Employee", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Employee;