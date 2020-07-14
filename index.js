const express = require("express");
const shortid = require("shortid");

const Posts = require("./posts/posts-model.js");
const postsRouter = require("./posts/posts-router.js");

const server = express();

server.use(express.json());

server.post('/api/users', (req, res) =>{
    const userInfo =  req.body;
 
     userInfo.id = shortid.generate();
     user.push(userInfo);
 try {
     res.status(201).json(userInfo)
 } catch (err){
     res.status(400).json({message: "errorMessage:", err});
 }
 });

server.get("/api/posts", (req, res) => {

})

server.use("/api/posts", postsRouter);


const PORT = 5000;
server.listen(PORT, () => {
    console.log('listening on localhost:', PORT);
});

