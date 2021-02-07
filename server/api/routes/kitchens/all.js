const Kitchen = require("../../models/Kitchen");

module.exports = async (req, res) => {
  try {
    const kitchens = await Kitchen.find();
    res.status(200).json({ kitchens });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
