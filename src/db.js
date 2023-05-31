const {Sequelize} = require('sequelize');
require('dotenv').config();
const UserModel = require('./models/User');
const PostModel = require('./models/Post');

const {DB_USER, DB_PASSWORD, DB_PUERTO, DB_DATABASE, DB_HOST, DB_DEPLOY} = process.env;


 /*  const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PUERTO}/${DB_DATABASE}`,
    {logging: false}); */
 

    const sequelize = new Sequelize(
        DB_DEPLOY,
        {logging: false});
      
    

UserModel(sequelize);
PostModel(sequelize);



const {User, Post} = sequelize.models;
 
User.hasMany(Post);
Post.belongsTo(User);


module.exports = {sequelize,
...sequelize.models};

