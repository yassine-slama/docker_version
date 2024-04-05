
// import express, { json } from 'express';
// import { connect } from 'mongoose';
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3030;
const cors = require('cors');
const app = express();
require('dotenv').config();

const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

const teamRoutes = require('./routes/team');
const playerRoutes = require('./routes/player');
const staffRoutes = require('./routes/staff');

const statsRoutes = require('./routes/stats');


app.use(cors());
// Middleware
// app.use(bodyParser.json());
app.use(express.json());




// Routes
app.use('/auth', authRoutes); 

app.use('/api/teams', teamRoutes);

app.use('/api/players', playerRoutes);
app.use('/api/staff', staffRoutes);

app.use('/api/stats', statsRoutes);



/**
 * @test
 */
app.get('/protected-route', authMiddleware, (req, res) => {
    res.json({ message: 'This route is protected and requires authentication' });
});

/**
 * @health
 */
app.get('/health', (req,res) => {
    res.json({
        status: 'UP',
        version: '1.0.0'
    });
});

/**
 * @DB
 * @MongoDB
 */
// CONNECT TO MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB Atlas', err));



app.listen(port,'0.0.0.0', () => {
    console.log(`Server is RUNNING on http://0.0.0.0:${port}`)
});

