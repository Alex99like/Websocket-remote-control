import { screen, Point, mouse, Region } from '@nut-tree/nut-js'
import {WSStream} from "../helpers/reviewMessage";
import Jimp from "jimp";

 
export const printScreen = async (ws: WSStream) => {

  const mousePosition = await mouse.getPosition();
  const region = await new Region(mousePosition.x - 100, mousePosition.y - 100, 200, 200)
  const img = await (await screen.grabRegion(region)).toRGB()
  const jimp = await Jimp.read(await new Jimp(img))
  const buffer = await jimp.getBase64Async(jimp.getMIME())
  ws.write(`prnt_scrn ${buffer.split('data:image/png;base64,').join('')}`)

}