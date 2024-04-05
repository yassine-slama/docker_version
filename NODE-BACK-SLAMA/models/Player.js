const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  age: { type: Number, required: false },
  birthdate: { type: String, required: true },
  nationality: { type: String, required: true },
  gender: { type: String, required: true },
  number: { type: Number, required: true },
  position: { type: String, required: true },
  team_id: { type: String, required: true },
  image: { type: String, required: true },
  
});

module.exports = mongoose.model('Player', playerSchema);



