const express = require('express');
const router = express.Router();
const teamController = require('../controllers/TeamController');
const authMiddleware = require('../middleware/auth');


router.get('/get-all', authMiddleware, teamController.getAllTeams);

router.get('/get-id-team', teamController.getIdAndTeamnameOfAllTeams);

router.get('/get-budgets', teamController.getIdAndTeamnameAndBudget);

router.get('/get-one/:id', authMiddleware, teamController.getTeamById);


router.post('/create', authMiddleware, teamController.createTeam);


router.put('/update-one/:id', authMiddleware, teamController.updateTeam);


router.delete('/destroy/:id', authMiddleware, teamController.deleteTeam);

module.exports = router;


