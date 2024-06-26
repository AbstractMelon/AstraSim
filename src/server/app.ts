import express from 'express';
import http from 'node:http';
import { WebSocketServer } from 'ws';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const PORT = 3001;

wss.on('connection', (ws) => {
  console.log('New client connected');

  const sendTime = setInterval(() => {
    ws.send(JSON.stringify({ type: 'time', time: new Date().toLocaleTimeString() }));
  }, 1000);
  
  ws.on('message', (message: string) => {
    console.log(`Received message => ${message}`);
    const data = JSON.parse(message);

    if (data.type === 'change-time') {
      clearInterval(sendTime);
      ws.send(JSON.stringify({ type: 'time', time: data.time }));
    }
  });

  ws.on('close', () => {
    clearInterval(sendTime);
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});