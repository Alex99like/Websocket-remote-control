import { mouse } from '@nut-tree/nut-js'
import { RawData, WebSocket, createWebSocketStream } from 'ws'
import { printScreen } from '../service/printScreen'

export type WSStream = ReturnType<typeof createWebSocketStream>

export const reviewMessage = async (command: RawData, ws: WSStream) => {
  if (command.toString() === 'mouse_position') {
    const pos = await mouse.getPosition()
    ws.write(`mouse_position ${pos.x},${pos.y}`)
  } else if (command.toString() === 'prnt_scrn') {
    await printScreen(ws)
  } else {
    ws.write(command.toString().replace(/ /g,"_"))
  }
}