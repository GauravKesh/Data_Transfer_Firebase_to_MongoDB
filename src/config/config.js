const  dotenvFlow =require( 'dotenv-flow')

// Load environment variables
dotenvFlow.config()

// Creating a configuration module
const config = {
    ENV: process.env.ENV || 'development',
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL,
}

module.exports =  config
