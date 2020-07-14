const express = require("express");

const postsRouter = require("./server.js");


const PORT = 5000;
postsRouter.listen(PORT, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});