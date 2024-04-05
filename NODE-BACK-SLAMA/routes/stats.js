const express = require('express');
const router = express.Router();
const statsController = require('../controllers/StatsController');
const authMiddleware = require('../middleware/auth');


// GET all players
router.get('/get-stats', authMiddleware, statsController.getCounts);


module.exports = router;