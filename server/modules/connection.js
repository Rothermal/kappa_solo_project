var pg = require('pg');
// connection.js
var connectionString = process.env.DATABASE_URL ||'postgres://localhost:5432/my_side_jobs_db';

if(connectionString == process.env.DATABASE_URL) {
    pg.defaults.ssl = true;
}
console.log('pg connect in server',connectionString);
module.exports = connectionString;


//if(connectionString = process.env.DATABASE_URL) {
//    pg.defaults.ssl = true;
//}

