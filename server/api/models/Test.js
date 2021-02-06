const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  kitchen: {
    type: String,
  },
  messy: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tests", TestSchema);
