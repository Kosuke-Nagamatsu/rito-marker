import { TextShapeType } from './types'
import { ISLANDS_WITH_IMAGE } from './constants'

export const hasWhitespace = (values: string[]) => {
  const regex = /\s/
  return values.some(value => regex.test(value))
}

// Text形状のtext値だけの配列へ変換
export const toTexts = (shapes: TextShapeType[]) => shapes.map(shape => shape.text)

// 画像ファイルのある離島からurlを取り出す
export const getImageUrl = (text: string) => {
  const island = ISLANDS_WITH_IMAGE.find(island => island.name === text)
  return island?.imgUrl
}
