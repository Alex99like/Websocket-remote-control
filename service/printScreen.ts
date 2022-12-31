import { screen, Point, mouse, Region } from '@nut-tree/nut-js'
import { createReadStream } from 'fs'
import path from 'path'
import process from 'process'
import { WebSocket } from 'ws'
 
export const printScreen = async (ws: WebSocket) => {
  const mousePosition = await mouse.getPosition();
  await screen.captureRegion('file.png', new Region(mousePosition.x - 100, mousePosition.y - 100, 200, 200))
  const stream = createReadStream(path.resolve(process.cwd(), 'file.png'))
  let buffer: string = ''
  stream.on("data", (data) => {
    buffer += Buffer.from(data).toString("base64");
  });
  stream.on('end', () => {
    ws.send(`prnt_scrn ${buffer}`)
  })
}