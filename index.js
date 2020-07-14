const express = require("express");

const Posts = require("./posts/posts-model.js");
const postsRouter = require("./posts/posts-router.js");

const server = express();

server.use(express.json());

server.get("/api/posts", (req, res) => {

})

server.use("/api/posts", postsRouter);

