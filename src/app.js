const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const mainRouter = require('./routes/index')


const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next)=>{
     res.header('Access-Control-Allow-Origin', '*');  // http://localhost:3000 (remplace por el *)
     res.header('Access-Control-Allow-Credentials', 'true');
     res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
     );
     res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
     );
     next();
});


app.use( mainRouter);


module.exports = app
