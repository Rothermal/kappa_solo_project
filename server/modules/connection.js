// connection.js
var connectionString =  process.env.DATABASE_URL || 'postgres://localhost:5432/my_side_jobs_db';

//if(process.env.DATABASE_URL != undefined) {
//    connectionString = process.env.DATABASE_URL + 'ssl';
//} else {
//    connectionString = 'postgres://localhost:5432/my_side_jobs_db';
//}


if(connectionString = process.env.DATABASE_URL) {
    pg.defaults.ssl = true;
}


console.log('connectionstring in connection js',connectionString);
module.exports = connectionString;



