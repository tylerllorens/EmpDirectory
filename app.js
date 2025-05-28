const express = require("express");
const app = express();
export default app;
// const PORT = process.env.PORT || 3000;
import employees from "./db/employees.js";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomEmployee = Math.floor(Math.random() * employees.length);
  res.json(employees[randomEmployee]);
});

app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;

  const employee = employees.find((employee) => employee.id === +id);
  if (!employee) {
    return res.status(404).json("Employee not found");
  }

  res.json(employee);
});
