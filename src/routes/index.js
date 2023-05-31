const {Router} = require('express') ; // es igual => const userRouter = require ('express').Router();
const usersRouter = require('./usersRouter');
const postsRouter = require('./postsRouter');


const mainRouter = Router();

mainRouter.use('/users', usersRouter);
mainRouter.use('/posts', postsRouter);




module.exports = mainRouter