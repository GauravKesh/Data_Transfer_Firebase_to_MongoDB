const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const router = require('./api/router/firebaseRoutes')
const blogRoutes = require('./routes/blogRoute.js');
const { limiter } = require('./util/apiRateLimit')
const allowedOrigins = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        // Check if the incoming origin is in the list of allowed origins
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}
app.use(cors(corsOptions))
// Middleware
app.use(express.urlencoded({ extended: true })) // Parses incoming URL-encoded data
app.use(express.json())
app.use(helmet())
app.use(limiter)


// API ENtry Point
app.use('/api/v1/blogs', router)
app.use('/api/v1/blogs/mongodb', blogRoutes);

// 404 Handler
app.use((req, _, next) => {
    try {
        console.log('Working..');
    } catch (err) {
       console.log(err);
    }finally{
        next();
    }
})

// Global error handler
// app.use(globalErrorHandler)

module.exports = app
