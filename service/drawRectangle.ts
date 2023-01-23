import {mouse, Point, straightTo, right, Button, down, up, left} from '@nut-tree/nut-js'

export const drawRectangle = async (width: number, height: number) => {
    try {
        mouse.config.mouseSpeed = 190
        await mouse.pressButton(Button.LEFT);
        await mouse.move(down(height));
        await mouse.move(right(width));
        await mouse.move(up(height));
        await mouse.move(left(width));
        await mouse.releaseButton(Button.LEFT);
    } catch (e) {
        console.log(`Error: ${(e as Error).message}`)
    }
  }