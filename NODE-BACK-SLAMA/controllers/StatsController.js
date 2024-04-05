const User = require('../models/User'); // Import the User model
const Player = require('../models/Player'); // Import the Player model
const Staff = require('../models/Staff'); // Import the Staff model
const Team = require('../models/Team'); // Import the Team model


// Controller function to fetch counts from different collections
const getCounts = async (req, res) => {
  try {
    // Fetch counts from different collections
    const userCount = await User.countDocuments({});
    const playerCount = await Player.countDocuments({});
    const staffCount = await Staff.countDocuments({});
    const teamCount = await Team.countDocuments({});

    // Return the counts as a JSON response
    return res.json({
      userCount,
      playerCount,
      staffCount,
      teamCount,
    });
  } catch (error) {
    console.error('Error fetching counts:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export the controller function
module.exports = {
  getCounts,
};
