const Kitchen = require("../../models/Kitchen");

module.exports = async (req, res) => {
  try {
    const kitchen = await Kitchen.find().limit(1).sort({ $natural: -1 });
    res.status(200).json(kitchen[0]);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
