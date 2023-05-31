const { Router } = require("express");
const { getUsersHandler, getUserHandler, createUserHandler, deleteUserHandler} = require('../handlers/usersHandlers')

const usersRouter = Router();

const validate = (req, res, next)=> {
      const{name, email, phone} = req.body;
      if(!name || !email || !phone)
        res.status(400).send({error:'missig data'});
      next();
};


usersRouter.get('/', getUsersHandler);
usersRouter.get('/:id', getUserHandler);
usersRouter.post('/',validate,  createUserHandler);
usersRouter.delete('/:id', deleteUserHandler);



module.exports= usersRouter;