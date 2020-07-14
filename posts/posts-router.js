const express = require("express");

const router = express.Router();

server.post('/api/posts', (req, res) =>{
    const postInfo =  req.body;
 
     postInfo.id = shortid.generate();
     user.push(postInfo);
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

module.exports = router;