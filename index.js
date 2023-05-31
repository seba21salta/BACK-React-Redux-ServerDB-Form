const app = require('./src/app');
const {sequelize} = require('./src/db');

require ('dotenv').config();
const {PORT} = process.env


/* app.listen(3001, ()=> {
    sequelize.sync({alter: true}, console.log('creo que soy la DB'));
      console.log("listening on port 3001");
  });   
 */

sequelize.sync({force: true}).then(()=>{
  console.log('dataBase conectada');
  app.listen(PORT, ()=> {
    console.log(`listening port: ${PORT} `);
    })
  });   