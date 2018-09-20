const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

/*------------ AJAX stuff -------------------*/

router.get('/', (req, res) => {
  console.log('GET req.query:', req.query);
  pool.query(`SELECT * FROM "shoes"`)
    .then((results) => {
      console.log('Back from GET with:', results.rows);
      res.send(results.rows);
    })
    .catch((error) => {
      console.log('Error with SQL select for shoes:', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  pool.query(`INSERT INTO "shoes" ("name", "cost") 
              VALUES ($1, $2);`, [req.body.name, req.body.cost])
    .then(() => {
      console.log('Back from POST');
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error posting", error);
      res.sendStatus(500);
    })
});

router.delete('/', (req, res) => {
  console.log("req.query:", req.query);
  pool.query(`DELETE FROM "shoes"
               WHERE "id"=$1;`, [req.query.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('Error deleting shoes:', error);
      res.sendStatus(500);
    })
});

module.exports = router;