const express = require('express');
const http = require('http');
const cors = require('cors');
const io = require('socket.io');

const app = express();

const server = http.createServer(app);
