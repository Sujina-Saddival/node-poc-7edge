const mongoose = require('mongoose')

const { DB_NAME_DEVELOPMENT, DB_USERNAME_DEVELOPMENT, DB_PASSWORD_DEVELOPMENT } = process.env;

const dbConnection = () =>{
    try {
        mongoose.connect(`mongodb+srv://${DB_USERNAME_DEVELOPMENT}:${DB_PASSWORD_DEVELOPMENT}@cluster0-lplpp.mongodb.net/${DB_NAME_DEVELOPMENT}?retryWrites=true&w=majority`)
    } catch(error){
        throw error ("DB is not connected, try again or restart the server!")
    }
}

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Mongoose default connection is now open`);
});

module.exports = {
    dbConnection
}