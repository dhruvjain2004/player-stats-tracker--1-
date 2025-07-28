const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  team: String,
  position: String
});

module.exports = mongoose.model("Player", playerSchema);
