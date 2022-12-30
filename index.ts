import { httpServer } from "./src/http_server/index";
import { mouse } from "@nut-tree/nut-js";
import { WebSocketServer } from 'ws'
import { reviewMessage } from "./helpers/reviewMessage";
import { actions } from "./service/store";

const HTTP_PORT = 8181;

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Connect')
  ws.on('message', async (data) => {
    console.log(data.toString())
    const [command, width, height] = data.toString('utf-8').split(' ')
    
    await actions(command, width, height)
    ws.send(await reviewMessage(data))
  })
})

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
