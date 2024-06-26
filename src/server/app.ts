import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 4321 });

wss.on('connection', function connection(ws: { on: (arg0: string, arg1: { (...data: any[]): void; (message?: any, ...optionalParams: any[]): void; (data: any): void; }) => void; send: (arg0: string) => void; }) {
  ws.on('error', console.error);

  ws.on('message', function message(data: any) {
    console.log('received: %s', data);
  });

  ws.send('something');
});