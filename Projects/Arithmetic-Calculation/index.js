const express = require("express");
const { add, sub, multiply, divide } = require("./arithmeticFunctions");

const app = express();
app.use(express.json());

app.post("/calculate", (req, res) => {
  const { operation, value_1, value_2 } = req.body;

  let result;
  let operationName;

  if (operation === "add") {
    result = add(value_1, value_2);
    operationName = "Addition";
  } else if (operation === "sub") {
    result = sub(value_1, value_2);
    operationName = "Subtraction";
  } else if (operation === "mul") {
    result = multiply(value_1, value_2);
    operationName = "Multiplication";
  } else if (operation === "div") {
    result = divide(value_1, value_2);
    operationName = "Division";
  } else {
    return res.status(400).json({ message: "Invalid operation" });
  }

  console.log(`Operation: ${operationName}`);
  console.log(`Value 1: ${value_1}`);
  console.log(`Value 2: ${value_2}`);
  console.log(`Result: ${result}`);

  res.json({ result });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});