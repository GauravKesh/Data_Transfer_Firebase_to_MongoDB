// src/config/db.js
const mongoose = require('mongoose')
const config = require('../config/config') // Ensure this is correct
const logger = require('../util/logger')


const urlDB = config.DATABASE_URL

const connectToDatabases = async () => {
    try {
        await mongoose.connect(urlDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
        });

        console.log('Connected to MongoDB Atlas successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        process.exit(1);
    }
};

module.exports = connectToDatabases;