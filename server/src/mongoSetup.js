var mongoose = require('mongoose');
require('dotenv').config()

let dbURI =  process.env.MONGO_URL;

function setDbUri(uri){
  dbURI = uri;
}

function connect(){
  return mongoose.connect(dbURI);  
}

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

module.exports = {
  setDbUri: setDbUri,
  connect: connect
}