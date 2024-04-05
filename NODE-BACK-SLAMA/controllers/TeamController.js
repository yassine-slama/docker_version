const Team = require('../models/Team');

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIdAndTeamnameOfAllTeams = async (req, res) => {
  try {
    const teams = await Team.find({}, '_id teamname'); // Retrieve only _id and teamname fields
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getIdAndTeamnameAndBudget = async (req, res) => {
  try {
    const teams = await Team.find({}, '_id teamname budget'); 
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTeamById = async (req, res) => {
    try {
      const team = await Team.findById(req.params.id);
      if (team == null) {
        return res.status(404).json({ message: 'Team not found' });
      }
      res.json(team);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

exports.createTeam = async (req, res) => {
    const team = new Team({
      teamname: req.body.teamname,
      founded: req.body.founded,
      owner: req.body.owner,
      league: req.body.league,
      budget: req.body.budget,
      logo: req.body.logo,
    });
    try {
      const newTeam = await team.save();
      res.status(201).json(newTeam);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};

exports.updateTeam = async (req, res) => {
    try {
      const team = await Team.findById(req.params.id);
      if (team == null) {
        return res.status(404).json({ message: 'Team not found' });
      }
      team.teamname = req.body.teamname || team.teamname;
      team.founded = req.body.founded || team.founded;
      team.owner = req.body.owner || team.owner;
      team.league = req.body.league || team.league;
      team.budget = req.body.budget || team.budget;
      team.logo = req.body.logo || team.logo;
      const updatedTeam = await team.save();
      res.json(updatedTeam);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};

exports.deleteTeam = async (req, res) => {
    try {
      const team = await Team.findById(req.params.id);
      if (team == null) {
        return res.status(404).json({ message: 'Team not found' });
      }
      await team.deleteOne();
      res.json({ message: 'Team deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};
  
