const express = require('express');
const pg = require('pg');

//globals
const app = express();
const PORT = process.env.port || 5000;

//uses
app.use(express.static('server/public'))


/*----------- set up postgresql ------------*/

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

/*------------ AJAX stuff -------------------*/

app.get('/shoes', (req, res) => {
  pool.query('SELECT * FROM "shoes";')
    .then((results) => {
      console.log('Back from db with:', results.rows);
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('Error with SQL select for shoes:', error);
      res.send(500);
    });
});

/*------------ spin up server -------------------*/

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
})