import { mouse, Button, straightTo, Point } from '@nut-tree/nut-js'

export const drawCircle = async (cm: string) => {
  try {
    const center = await mouse.getPosition()
    const radius = +cm;
    mouse.config.mouseSpeed = 300
    await mouse.pressButton(Button.LEFT)

    for (let angle = 0; angle < 360; angle += 1) {
      const x = center.x - radius * Math.cos((angle * Math.PI) / 180) + radius;
      const y = center.y - radius * Math.sin((angle * Math.PI) / 180);
      await mouse.move(straightTo(new Point(x, y)));
    }

    await mouse.releaseButton(Button.LEFT)
  } catch (e) {
    console.log(`Error: ${(e as Error).message}`)
  }
}