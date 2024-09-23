const mongoose = require('mongoose');

mongoose.connect(process.env.database_url);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log('database is connected');
})

module.exports = db;