const mongoose = require("mongoose");

const KitchenSchema = new mongoose.Schema({
  kitchen: {
    type: String,
  },
  messy: {
    type: Boolean,
    default: false,
    required: true,
  },
  objects: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Kitchens", KitchenSchema);
