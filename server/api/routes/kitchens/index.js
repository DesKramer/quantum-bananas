const express = require("express");
const router = express.Router();
const Kitchen = require("../../models/Kitchen");

router.get("/", async (req, res) => {
  res.status(200).json({ message: "Kitchen Route!" });
});

router.post("/", (req, res) => {
  const { kitchen, messy, objects } = req.body;

  const kitchenRow = new Kitchen({
    kitchen: kitchen,
    messy: messy,
    objects: objects,
  });

  kitchenRow
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
