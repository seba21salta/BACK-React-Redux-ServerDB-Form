const {Router} = require('express');
const {createPostHandler, getAllPostHandler} = require('../handlers/postsHandlers')

postsRouter = Router();



postsRouter.post('/', createPostHandler );
postsRouter.get('/', getAllPostHandler);







module.exports = postsRouter;