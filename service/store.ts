import { mouse, left, right, up, down } from '@nut-tree/nut-js'
import { drawCircle } from './drawCircle'

export const actions = async (command: string, width: string, height: string) => {
  switch(command) {
    case 'mouse_left': {
      await mouse.move(left(+width))
      break
    } 
    case 'mouse_right': {
      await mouse.move(right(+width))
      break
    } 
    case 'mouse_up': {
      await mouse.move(up(+width))
      break
    } 
    case 'mouse_down': {
      await mouse.move(down(+width))
      break
    } 
    case 'draw_circle': {
      await drawCircle(width)
    }
  }
}