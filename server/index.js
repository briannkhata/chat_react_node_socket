const express = require('express');
const app = express();
const http = require('http')
const cors = require('cors')

app.use(cors());

const server = http.createServer(app);

server.listen(5000, ()=> {
    console.log("Server running at port 5000");
})