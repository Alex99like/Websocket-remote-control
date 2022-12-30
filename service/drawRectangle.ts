import { mouse, Point, straightTo, right, Button } from '@nut-tree/nut-js'

export const drawRectangle = async (width: number, height: number) => {
    const positionOne = await mouse.getPosition()
    const pointD = new Point(positionOne.x - width / 2, positionOne.y + height)
    await mouse.pressButton(Button.LEFT)
    await mouse.move(straightTo(pointD))
    await mouse.move(right(width))
    const positionTwo = await mouse.getPosition()
    const pointP = new Point(positionTwo.x - width / 2, positionTwo.y - height)
    await mouse.move(straightTo(pointP))
    await mouse.releaseButton(Button.LEFT)
  }