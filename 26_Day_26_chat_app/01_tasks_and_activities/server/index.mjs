import { WebSocket } from 'ws';

const wss = new WebSocket.Server({ port: 8082 });

wss.on('connection', (ws) => {
  console.log('new client has been connected');

  ws.on('close', () => {
    console.log('connection has been severed');
  });

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });
});

