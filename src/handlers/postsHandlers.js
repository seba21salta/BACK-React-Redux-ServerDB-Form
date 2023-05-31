const {crearPost, getAllPost} = require('../controllers/postscontrollers');


const createPostHandler = async (req, res)=> {
    const{ title, body, userId} = req.body
    
    try {
        const newPost = await crearPost(title, body, userId);
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getAllPostHandler = async (req, res)=> {
    try {
        const allpost =  await getAllPost(); 
      res.status(200).json(allpost)        
    } catch (error) {
        res.status(400).json({error:error.message})
    };

};



module.exports = {createPostHandler, getAllPostHandler}