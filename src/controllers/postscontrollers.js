const {Post} = require('../db')


const crearPost = async (title, body, userId)=> {
    const newPost =  await Post.create({title, body});
     await newPost.setUser(userId);
     return newPost  

};

const getAllPost = async ()=>{
    return await Post.findAll();
   // return allPost;
    

}



module.exports = {crearPost, getAllPost}