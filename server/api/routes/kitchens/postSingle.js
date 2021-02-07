const Kitchen = require("../../models/Kitchen");

module.exports = async (req, res) => {
  const { kitchen, messy, objects } = req.body;

  const kitchenRow = new Kitchen({
    kitchen: kitchen,
    messy: messy,
    objects: objects,
  });

  try {
    const io = res.locals["socketio"];
    const savedKitchen = await kitchenRow.save();
    res.status(200).json(savedKitchen);
    io.emit("latestKitchen", savedKitchen);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
