const express = require('express');
const router = express.Router();
const staffController = require('../controllers/StaffController');
const authMiddleware = require('../middleware/auth');


router.get('/get-all', authMiddleware, staffController.getAllStaff);


router.get('/get-one/:id', authMiddleware, staffController.getStaffById);


router.post('/create', authMiddleware, staffController.createStaff);


router.put('/update-one/:id', authMiddleware, staffController.updateStaff);


router.delete('/destroy/:id', authMiddleware, staffController.deleteStaff);

module.exports = router;


