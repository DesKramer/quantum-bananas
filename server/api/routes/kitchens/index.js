const express = require("express");
const router = express.Router();
const Kitchen = require("../../models/Kitchen");

router.get("/", async (req, res) => {
  try {
    const kitchens = await Kitchen.find();
    res.status(200).json({ kitchens });
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const { kitchen, messy, objects } = req.body;

  const kitchenRow = new Kitchen({
    kitchen: kitchen,
    messy: messy,
    objects: objects,
  });

  try {
    const savedKitche = await kitchenRow;
    res.status(200).json(savedKitche);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

module.exports = router;
