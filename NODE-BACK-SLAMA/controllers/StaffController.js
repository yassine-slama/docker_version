const Staff = require('../models/Staff');

exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (staff == null) {
      return res.status(404).json({ message: 'Staff not found' });
    }
    res.json(staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createStaff = async (req, res) => {

  const birthdate = new Date(req.body.birthdate);
  const currentDate = new Date();

  // Calculate age
  const age = currentDate.getFullYear() - birthdate.getFullYear();

  // Adjust age based on the birthdate
  if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
    age--;
  }
  const staff = new Staff({
    fullname: req.body.fullname,
    age: age,
    birthdate: birthdate,
    nationality: req.body.nationality,
    gender: req.body.gender,
    role: req.body.role,
    team_id: req.body.team_id,
    image: req.body.image
  });
  try {
    const newStaff = await staff.save();
    res.status(201).json(newStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (staff == null) {
      return res.status(404).json({ message: 'Staff not found' });
    }
    staff.fullname = req.body.fullname || staff.fullname;
    staff.nationality = req.body.nationality || staff.nationality;
    staff.gender = req.body.gender || staff.gender;
    staff.role = req.body.role || staff.role;
    staff.team_id = req.body.team_id || staff.team_id;
    staff.image = req.body.image || staff.image;

    // Update birthdate and calculate age if provided
    if (req.body.birthdate) {
      staff.birthdate = req.body.birthdate;

      // Calculate age
      const birthdate = new Date(req.body.birthdate);
      const currentDate = new Date();
      let age = currentDate.getFullYear() - birthdate.getFullYear();

      if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
      }

      // Update age
      staff.age = age;
    } else {
      // If no birthdate is provided, keep the existing age
      staff.age = req.body.age || staff.age;
    }
    const updatedStaff = await staff.save();
    res.json(updatedStaff);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (staff == null) {
      return res.status(404).json({ message: 'Staff not found' });
    }
    await staff.deleteOne();
    res.json({ message: 'Staff deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
