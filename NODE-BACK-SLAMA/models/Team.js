const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({

  teamname: { type: String, required: true },
  founded: { type: String, required: true },
  owner: { type: String, required: true },
  league: { type: String, required: true },
  budget: { type: String, required: true },
  
  logo: { type: String, required: true },
  
});

module.exports = mongoose.model('Team', teamSchema);



