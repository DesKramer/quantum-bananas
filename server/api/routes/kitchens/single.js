const Kitchen = require("../../models/Kitchen");

module.exports = async (req, res) => {
  const { kitchenId } = req.params;

  try {
    const kitchen = await Kitchen.findById(kitchenId);
    res.status(200).json({ kitchen });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
