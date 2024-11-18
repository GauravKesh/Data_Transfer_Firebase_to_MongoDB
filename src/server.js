const configData = require('./config/config') // Import config data
const http = require('http')
const app = require('./app')
const {logger} = require("./util/logger")
const  connectToDatabases  = require('./database/db')
const server = http.createServer(app)



const PORT = configData.PORT || process.env.PORT

connectToDatabases()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((err) => {
        logger.error('Error connecting to databases:', err) // Log error connecting to databases
        process.exit(1) // Exit the process if initial connection fails
    })
