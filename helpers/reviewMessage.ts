import { mouse } from '@nut-tree/nut-js'
import { RawData, WebSocket } from 'ws'
import { printScreen } from '../service/printScreen'

export const reviewMessage = async (command: RawData, ws: WebSocket) => {
  if (command.toString() === 'mouse_position') {
    const pos = await mouse.getPosition()
    ws.send(`mouse_position ${pos.x},${pos.y}`)
  } else if (command.toString() === 'prnt_scrn') {
    await printScreen(ws)
  } else {
    ws.send(command.toString()) 
  }
}