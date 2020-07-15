const express = require("express");
const Posts = require("../data/db");


const router = express.Router();


router.post('/api/posts', (req, res) =>{
    Posts.insert(req.body)
    .then(pos => {
       res.status(201).json(pos);
    })
    .catch(err => {
        res.status(500).json({ message: 'Error adding the post', err})
    })
 });


router.get("/api/posts", (req, res) => {
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

router.get("/api/posts/:id", (req, res) => {
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

router.delete('/api/posts/:id', (req, res) => {
    Posts.remove(req.params.id)
    .then(count => {
        if(count > 0){
            res.status(200).json({ message: "The post is deleted"});
        } else {
            res.status(404).json({ message: "The Post could not be found"});
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Error removing the Post', err})
    })
})


router.put('/api/posts/:id', (req, res) => {
    const changes = req.body;

    Posts.update(req.params.id, changes)
    .then(pos => {
        if (pos){
            res.status(200).json(pos);
        } else {
            res.status(404).json({ message: "The Post could not be found"})
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "error updating the post"
        })
    })
})

router.get("/api/posts/:id/comments", async (req, res) => {
    try {
        const comments = await Posts.findPostComments(req.params.id);

        if(comments.lenght > 0) {
            res.status(200).json(comments);
        } else {
            res.status(404).json({ message: "No Comments for this Post"})
        }
    } catch (err) {
        res.status(500).json({
            message: "Error retrieving the Comments for this Post"
        })
    }
})

router.post('/api/posts/:id/comments', async (req, res) =>{
    const postInfo =  {...req.body, post_id: req.params.id };
 try {
  const comments = await Posts.insertComment(postInfo);
    res.status(201).json(comments)
 } catch (err){
     res.status(500).json({message: "errorMessage:", err});
 }
 });



 module.exports = router;