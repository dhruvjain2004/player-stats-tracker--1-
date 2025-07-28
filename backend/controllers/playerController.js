const Player = require("../models/Player");

exports.createPlayer = async (req, res) => {
  const player = new Player(req.body);
  await player.save();
  res.json(player);
};

exports.getAllPlayers = async (req, res) => {
  const players = await Player.find();
  res.json(players);
};
