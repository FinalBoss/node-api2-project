const express = require("express");

const server = express();

const postsRouter = require('./posts/posts-router.js');
const contentsRouter = require('./contents/contents-router.js');


server.use(express.json());


server.get("/", (req, res) => {
    res.send(`
    <p>Hello World</p>
    `);
})

server.use("/api/posts", postsRouter);
server.use("/api/posts/:id/comments", contentsRouter);






module.exports = server;