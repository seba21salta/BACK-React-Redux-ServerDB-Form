const {User, Post} = require("../db");
const axios = require('axios');



const createUser = async (name, email, phone) => {
     return await User.create({name, email, phone})
};


const  getAllUsers = async () => {
     const UsersDatabase = await User.findAll();
     const UsersApi = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;

     UsersApiSelection = UsersApi.map((user)=> {
          return {
               "id": user.id,
               "name": user.name,
               "email": user.email,
               "phone": user.phone
          }
     })

     return [...UsersDatabase, ...UsersApiSelection]
};

const getUserByName = async (name)=> {
    const userNameDb = await User.findAll({where: {name : name}});
    const userNameApi = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
    const userFilterApi = userNameApi.filter((user)=> name === user.name);

    const userFilterApiMap = userFilterApi.map((user)=>{
     return{
          id :user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          "create": false
     }
    })

    return [...userNameDb, ...userFilterApiMap]
}


const getUserById = async (id, source) => {
     if(source === "Db"){
          return await User.findByPk(id,
                 {include: {
                    model: Post,
                     attributes:["title", "body"]}
                    }); 
     }else{
          const userApiId =  (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
          const userApiIdSelected = {
               id: userApiId.id,
               name: userApiId.name,
               email: userApiId.email,
               phone: userApiId.phone,
               created: false
               
          } 
          
          return userApiIdSelected;         

     } 

};


const deleteUserById = async (id) => {
          const userId = await User.findByPk(id);
           userId.destroy();
     
}



module.exports = {createUser, getAllUsers, getUserByName, getUserById, deleteUserById}