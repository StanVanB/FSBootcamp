const express = require("express");
const sequelize = require("./config");
const Employee = require("./models/Employee");
const Department = require("./models/Department");

const app = express();
const PORT = 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Unable to connect:", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



Department.hasMany(Employee, {
  onDelete: "CASCADE",
});

Employee.belongsTo(Department);

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized.");
  })
  .catch((err) => {
    console.error(err);
  });