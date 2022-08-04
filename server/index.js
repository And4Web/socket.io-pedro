const express = require('express');
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');
const PORT = 5000;

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
});

io.on("connection", (socket)=>{
  // console.log(`Connected User: ${socket.id}`)  
  socket.on("send", (data)=>{
    socket.broadcast.emit("received", data)
  })
})

server.listen(PORT, ()=>{
  console.log(`Listening at port: ${PORT}`)
})