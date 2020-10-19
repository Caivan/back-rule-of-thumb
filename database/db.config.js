require ('dotenv').config ();
//DATA BASE CONFIG OBJECT 
const dbconfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USR,
    PASSWORD: process.env.DB_PWD,
    DB: process.env.DB_NAME
};
module.exports = dbconfig;