const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "department_employee_db",
    "root",
    "Password123",
    {
        host: "localhost",
        dialect: "mysql"
    }   
);

module.exports = sequelize;