const mongoose = require('mongoose')
const dbconfig = require('./db.config');
const MONGO_DB_URI = `${dbconfig.PREFIX}://${dbconfig.USER}:${dbconfig.PASSWORD}@${dbconfig.HOST}/${dbconfig.DB}`;
const uri = process.env.MONGODB_URI || MONGO_DB_URI;

const db = mongoose.connection;

//CONFIRMATION OF THE CONNECTION WITH THE DATABASE
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('WE ARE CONNECTED TO', `${dbconfig.HOST}/${dbconfig.DB}/${dbconfig.DB}`);
});

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


