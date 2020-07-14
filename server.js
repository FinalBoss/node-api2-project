const express = require("express");
const shortid = require("shortid");

const server = express();

const postsRouter = require('./posts/posts-router.js');
const contentsRouter = require('./contents/contnets-router.js');

const pos = []



server.use(express.json());

server.post('/api/users', (req, res) =>{
    const userInfo =  req.body;
 
     userInfo.id = shortid.generate();
     pos.push(userInfo);
 try {
     res.status(201).json(userInfo)
 } catch (err){
     res.status(400).json({message: "errorMessage:", err});
 }
 });

server.get("/", (req, res) => {
    res.send(`
    
    `);
})

server.use("/api/posts", postsRouter);


server.post('/api/posts', (req, res) =>{
    const postInfo =  req.body;
 
     postInfo.id = shortid.generate();
     pos.push(postInfo);
 try {
     res.status(201).json(postInfo)
 } catch (err){
     res.status(400).json({message: "errorMessage:", err});
 }
 });

server.get("/api/posts", (req, res) => {
    Posts.find(req.query)
    .then(post => {
        res.status(200).json(post);
    }) 
    .catch(err => {
        res.status(500).json({
            message: "Error retrieving posts", err
        });
    })
}) 

server.get("/api/posts", (req, res) => {
    Posts.findById(req.params.id)
    .then(post => {
        res.status(200).json(post);
    }) 
    .catch(err => {
        res.status(500).json({
            message: "Error retrieving posts", err
        });
    })
}) 


module.exports = server;