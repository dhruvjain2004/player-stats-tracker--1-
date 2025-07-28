const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  date: Date,
  season: String,
  teamA: String,
  teamB: String,
  stats: [{
    playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
    points: Number,
    assists: Number,
    rebounds: Number
  }]
});

module.exports = mongoose.model("Match", matchSchema);
