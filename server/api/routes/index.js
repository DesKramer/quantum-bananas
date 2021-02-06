const routes = require("express").Router();
const kitchens = require("./kitchens");

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected to Quantum Bananas API!" });
});

routes.use("/kitchens", kitchens);

module.exports = routes;
