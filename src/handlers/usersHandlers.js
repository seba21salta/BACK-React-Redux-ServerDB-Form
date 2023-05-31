 const {createUser, getAllUsers, getUserByName, getUserById, deleteUserById} = require('../controllers/userscontrollers');


const getUsersHandler = async (req, res)=> {
        const {name} = req.query;
        if(name){
            try {
                const getUserName = await getUserByName(name);
                res.status(200).json(getUserName);
                
            } catch (error) {
                res.status(400).json({error:error.message})
            }   
            
        }else{
            try {
            
             const Users = await getAllUsers();
           res.status(200).json(Users)
            
         } catch (error) {
            res.status(400).json({error:error.message})
         }   

         }
};


const getUserHandler = async (req, res)=> {
    const {id} = req.params;
    const source = isNaN(id) ? "Db" : "Api";
    const UserId = await getUserById(id, source);

    try {
        res.status(200).json(UserId);
    } catch (error) {
        res.status(400).json({error:error.message})
    }

};



        const createUserHandler = async (req, res)=> {
            const {name, email, phone} = req.body;

            try {
                const newUser = await createUser(name, email, phone);
                res.status(201).json(newUser)
            } catch (error) {
              res.status(400).json({error:error.message});
            }
         
         };

         const deleteUserHandler = async (req, res )=> {
              const {id} = req.params;
              try {
                const deleteUser = await deleteUserById(id);
                res.status(200).json(`Usuario eliminado`);

              } catch (error) {
                res.status(400).json({error:error.message})
              }
         };
         
 
module.exports = {
    getUsersHandler,
    getUserHandler,
    createUserHandler,
    deleteUserHandler
} 


