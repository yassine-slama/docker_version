const express = require('express');
const router = express.Router();
const playersController = require('../controllers/PlayersController');
const authMiddleware = require('../middleware/auth');

// Define your player routes

// GET all players
router.get('/get-all', authMiddleware, playersController.getAllPlayers);

// GET a player by ID
router.get('/get-one/:id', authMiddleware, playersController.getPlayerById);

// POST a new player
router.post('/create', authMiddleware, playersController.createPlayer);

// PUT an updated player
router.put('/update-one/:id', authMiddleware, playersController.updatePlayer);

// DELETE a player
router.delete('/destroy/:id', authMiddleware, playersController.deletePlayer);

module.exports = router;
