const Sequelize = require("sequelize");
const sequelize = require("../config");

const Department = sequelize.define("Department", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  department_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Department;