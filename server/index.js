const express = require('express');
const http = require('http');
const cors = require('cors');
const {Server} = require('socket.io');

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
});

server.listen(5000, ()=>{
  console.log("Listening at port: 5000")
})