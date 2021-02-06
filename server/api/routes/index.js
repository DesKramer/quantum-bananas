const routes = require("express").Router();
const pathTest = require("./pathTest");
const mdb = require("./mdb");

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected to Quantum Bananas API!" });
});

routes.use("/path_test", pathTest);
routes.use("/mdb", mdb);

module.exports = routes;
