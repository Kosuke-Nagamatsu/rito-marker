import { ISLANDS } from './constants'

export const hasWhitespace = (values: string[]) => {
  const regex = /\s/
  return values.some(value => regex.test(value))
}

// 画像ファイルのある離島からurlを取り出す
export const getImageUrl = (text: string) => {
  const island = ISLANDS.find(island => island.name === text)
  return island?.imgUrl
}
