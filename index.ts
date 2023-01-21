import { httpServer } from "./src/http_server/index";
import {createWebSocketStream, WebSocketServer} from 'ws'
import { reviewMessage } from "./helpers/reviewMessage";
import { actions } from "./service/store";
import { printScreen } from "./service/printScreen";

const HTTP_PORT = 8181;
const WSS_PORT = 8080

const wss = new WebSocketServer({ port: WSS_PORT });

wss.on('connection', (ws) => {
  console.log('Connect port')
  const stream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
  stream.on('data', async (chunk) => {
    const [command, width, height] = chunk.toString().split(' ')
    await actions(command, width, height)
    await reviewMessage(chunk, stream)
  })
})

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

wss.on('close', () => console.log('Connection is closed'));
