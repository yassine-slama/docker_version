const Player = require('../models/Player');

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getPlayerById = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (player == null) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(player);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPlayer = async (req, res) => {
  
  const birthdate = new Date(req.body.birthdate);
  const currentDate = new Date();

  // Calculate age
  const age = currentDate.getFullYear() - birthdate.getFullYear();

  // Adjust age based on the birthdate
  if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
    age--;
  }

  const player = new Player({
    fullname: req.body.fullname,
    age: age,
    birthdate: birthdate,
    nationality: req.body.nationality,
    gender: req.body.gender,
    number: req.body.number,
    position: req.body.position,
    team_id: req.body.team_id,
    image: req.body.image
  });

  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.updatePlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (player == null) {
      return res.status(404).json({ message: 'Player not found' });
    }

    // Update player fields
    player.fullname = req.body.fullname || player.fullname;
    player.nationality = req.body.nationality || player.nationality;
    player.gender = req.body.gender || player.gender;
    player.number = req.body.number || player.number;
    player.position = req.body.position || player.position;
    player.team_id = req.body.team_id || player.team_id;
    player.image = req.body.image || player.image;

    // Update birthdate and calculate age if provided
    if (req.body.birthdate) {
      player.birthdate = req.body.birthdate;

      // Calculate age
      const birthdate = new Date(req.body.birthdate);
      const currentDate = new Date();
      let age = currentDate.getFullYear() - birthdate.getFullYear();

      if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
      }

      // Update age
      player.age = age;
    } else {
      // If no birthdate is provided, keep the existing age
      player.age = req.body.age || player.age;
    }

    const updatedPlayer = await player.save();
    res.json(updatedPlayer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deletePlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (player == null) {
      return res.status(404).json({ message: 'Player not found' });
    }
    await player.deleteOne();
    res.json({ message: 'Player deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
