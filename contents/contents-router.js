const express = require("express");
const Posts = require("../data/db");

const router = express.Router();

router.get("/api/posts/:id/comments", async (req, res) => {
    const id = req.params.id

    try {
        const comments = await Posts.findCommentById(id);

        if(comments) {
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


module.exports = router;