import { mouse } from '@nut-tree/nut-js'
import { RawData } from 'ws'

export const reviewMessage = async (command: RawData) => {
  if (command.toString() === 'mouse_position') {
    const pos = await mouse.getPosition()
    return `mouse_position ${pos.x},${pos.y}`
  } else {
    return command.toString()
  }
}