const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  age: { type: Number, required: false },
  birthdate: { type: String, required: true },
  nationality: { type: String, required: true },
  gender: { type: String, required: true },
  role: { type: String, required: true },
  team_id: { type: String, required: true },
  image: { type: String, required: true },
  
});

module.exports = mongoose.model('Staff', staffSchema);



