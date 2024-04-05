const User = require('../models/User');

const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

exports.getUserDetailsByToken = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - Token not provided' });
    }

    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.userId;

    const user = await User.findById(userId, '_id fullname email');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    });
  } catch (error) {
    if (error instanceof TypeError) {
      // Handle errors related to splitting the header
      return res.status(401).json({ error: 'Authentication failed' });
    }

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }

    res.status(500).json({ message: error.message });
  }
};
