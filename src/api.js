const express = require('express');
const serverless = require ('serverless-http');
const cors = require ('cors');

var usersRouter = require('./routes/users');


const app = express();
app.use(cors());
//const router = express.Router();


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