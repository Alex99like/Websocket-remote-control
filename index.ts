import { httpServer } from "./src/http_server/index";
import { mouse } from "@nut-tree/nut-js";
import {createWebSocketStream, RawData, WebSocketServer} from 'ws'
import { reviewMessage } from "./helpers/reviewMessage";
import { actions } from "./service/store";
import { printScreen } from "./service/printScreen";

const HTTP_PORT = 8181;

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Connect')
  const stream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
  stream.on('data', async (chunk) => {
    const [command, width, height] = chunk.toString().split(' ')
    await actions(command, width, height)
    await reviewMessage(chunk, stream)
  })
})

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
