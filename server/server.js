const express = require('express');
const bodyParser = require('body-parser');
const shoeRouter = require('./routes/shoes.router')

//globals
const app = express();
const PORT = process.env.port || 5000;

//uses
app.use(express.static('server/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/shoes', shoeRouter);

/*------------ spin up server -------------------*/

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
})