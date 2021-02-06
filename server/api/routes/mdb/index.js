const express = require("express");
const router = express.Router();
const Test = require("../../models/Test");

router.get("/", async (req, res) => {
  res.status(200).json({ message: "MDB Route!" });
});

router.post("/", (req, res) => {
  const test = new Test({
    kitchen: req.body.kitchen,
    messy: req.body.messy,
  });

  test
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
