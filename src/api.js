const express = require('express');
const serverless = require ('serverless-http');
var usersRouter = require('./routes/users');

const app = express();
const router = express.Router();

 //E' necessario usare per tutte le route il prefisso /.netlify/functions
 app.use('/.netlify/functions/api',router)
 //E' possibile anche usare un file esterno
 app.use('/.netlify/functions/api/users', usersRouter);

 //NB!
 //NON è necessario avviare il server perchè stiamo creando una lambda function
 /*
 app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
*/

module.exports = app;
module.exports.handler= serverless(app); 