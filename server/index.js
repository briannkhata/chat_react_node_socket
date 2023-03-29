const express = require('express');
const app = express();
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')

app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5000",
        methods:["GET","POST"]
    }
})



io.on("connection",(socket)=>{
    console.log(socket.id);

    socket.on("disconnect",()=>{
        console.log("Usser Disconnected");
    })

})

server.listen(5000, ()=> {
    console.log("Server running at port 5000");
})