const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
  database: 'shoe_store', //name of database
  host: 'localhost', //location
  port: '5432', //port to access database (5432 is postgres default)
  max: 10, //concurrent query limit (heroku free maximum is 10)
  idleTimeoutMillis: 30000 //30 seconds before giving up
});

pool.on('connect', () => {
  console.log('Postgresql connected');
});

pool.on('error', (error) => {
  console.log('Error with postgresql pool', error);
});

module.exports = pool;