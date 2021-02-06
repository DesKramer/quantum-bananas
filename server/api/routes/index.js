const routes = require("express").Router();
const pathTest = require("./pathTest");

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected to Quantum Bananas API!" });
});

routes.use("/path_test", pathTest);

module.exports = routes;
