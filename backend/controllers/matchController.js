const Match = require("../models/Match");

exports.createMatch = async (req, res) => {
  const match = new Match(req.body);
  await match.save();
  res.json(match);
};

exports.getMatchesBySeason = async (req, res) => {
  const matches = await Match.find({ season: req.params.season }).populate('stats.playerId');
  res.json(matches);
};
