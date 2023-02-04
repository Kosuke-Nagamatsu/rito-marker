import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { v4 } from 'uuid'
import Konva from 'konva'
import { ISLANDS, VALIDATION_MESSAGE } from '../../constants'
import { hasWhitespace, getImageUrl } from '../../utils'
import type {
  ChildrenType,
  MultiInputValueType,
  TextShapeType,
  ShapeMarkerContextType,
} from '../../types'

// ローカルストレージに保存したデータを取得し、テキスト形状を管理するstateの初期値にする
const jsonObj = localStorage.getItem('textShapes') || ''
const initialState: TextShapeType[] = jsonObj ? JSON.parse(jsonObj) : []

const ShapeMarkerContext = createContext<ShapeMarkerContextType>({
  textShapes: [],
  inputValues: [],
  helperText: '',
  validation: { error: false, message: '' },
  islands: [],
  stage: { width: 0, height: 0 },
  handleDragStart: e => e,
  handleDragEnd: (e, text) => e,
  handleInputChange: (e, values) => e,
  handleAddButtonClick: () => console.log(''),
  handleMouseOver: (e, text) => e,
  handleMouseOut: () => console.log(''),
})

// 形状の表示・削除やドラッグ&ドロップなど、マーカー機能に必要なプロパティを提供するカスタムフック
export const useShapeMarkers = () => useContext(ShapeMarkerContext)

export const ShapeMarkerProvider: React.FC<ChildrenType> = props => {
  const { children } = props
  // ドラッグ&ドロップさせる形状を管理
  const [textShapes, setTextShapes] = useState(initialState)
  // Inputの入力欄に指定する値
  const [inputValues, setInputValues] = useState<MultiInputValueType>([])
  // ステージ上部に表示するメッセージ
  const [helperText, setHelperText] = useState('')
  // Inputのバリデーション関連
  const [validation, setValidation] = useState({ error: false, message: '' })
  // 離島名（text値）だけの配列。離島マーカーが作られるなど、textShapesに変化があるときだけtextsを更新
  const texts = useMemo(() => textShapes.map(shape => shape.text), [textShapes])
  // Inputのセレクトオプション。textsにある離島名は削除し表示しない
  const islands = useMemo(
    () => ISLANDS.filter(island => texts.indexOf(island.name) === -1),
    [texts]
  )
  // 形状をドラッグ&ドロップさせるステージの幅
  const stage = { width: window.innerWidth, height: window.innerHeight }

  // textShapesが更新されるたびに、ローカルストレージにも更新内容を保存
  useEffect(() => {
    localStorage.setItem('textShapes', JSON.stringify(textShapes))
  }, [textShapes])

  // 形状を削除できるかの判定（ステージの上下左右の境界線を越えると削除できる）
  const canRemoveShape = (e: Konva.KonvaEventObject<DragEvent>) => {
    const x = e.target.x()
    const y = e.target.y()
    return x < 0 || x > stage.width - 15 || y < 0 || y > stage.height
  }

  const handleDragStart = (e: Konva.KonvaEventObject<DragEvent>) => {
    const id = e.target.id()
    setTextShapes(
      textShapes.map(shape => {
        return {
          ...shape,
          isDragging: shape.id === id,
        }
      })
    )
  }

  // DragEndイベント：削除可能であれば削除。不可であればstateを更新。
  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>, text: string) => {
    const id = e.target.id()
    if (canRemoveShape(e)) {
      setTextShapes(textShapes.filter(shape => shape.id !== id))
      setHelperText(`${text}を削除しました`)
      return
    }
    setTextShapes(
      textShapes.map(shape => {
        const xy =
          shape.id === id ? { x: e.target.x(), y: e.target.y() } : { x: shape.x, y: shape.y }
        return {
          ...shape,
          ...xy,
          isDragging: false,
        }
      })
    )
  }

  // 入力された離島名がすでに存在するかの判定
  const hasSameText = (values: string[], texts: string[]) => {
    return values.some(value => texts.indexOf(value) >= 0)
  }

  const handleInputChange = (e: React.SyntheticEvent<Element, Event>, values: string[]) => {
    // スペースがあれば取り除き更新。エラーをオンにしメッセージをセット
    if (hasWhitespace(values)) {
      const regex = /\s/
      const validValues = values.filter(value => !regex.test(value))
      setInputValues([...validValues])
      setValidation({ error: true, message: VALIDATION_MESSAGE.SPACE })
      // 同じ離島名のマーカーがあれば取り除き更新。エラーをオンにしメッセージをセット
    } else if (hasSameText(values, texts)) {
      const validValues = values.filter(value => texts.indexOf(value) === -1)
      setInputValues([...validValues])
      setValidation({ error: true, message: VALIDATION_MESSAGE.UNIQUE })
      // 全て有効な場合は入力値で更新。エラーをオフにしメッセージを表示しない
    } else {
      setInputValues([...values])
      setValidation({ error: false, message: VALIDATION_MESSAGE.DEFAULT })
    }
  }

  const handleAddButtonClick = () => {
    const initialY = 80
    const intervalY = 50
    // textShapesへ追加するオブジェクトを用意
    const state = inputValues.map((value, i) => {
      const url = getImageUrl(value)
      return {
        id: v4(),
        x: stage.width * 0.9,
        y: initialY + intervalY * i,
        text: value,
        isDragging: false,
        imageUrl: url ? url : '',
      }
    })
    setTextShapes(prevState => [...prevState, ...state])
    setInputValues([])
  }

  const handleMouseOver = (e: Konva.KonvaEventObject<MouseEvent>, text: string) => {
    setHelperText(text)
  }

  const handleMouseOut = () => {
    setHelperText('')
  }

  return (
    <ShapeMarkerContext.Provider
      value={{
        textShapes,
        inputValues,
        helperText,
        validation,
        islands,
        stage,
        handleDragStart,
        handleDragEnd,
        handleInputChange,
        handleAddButtonClick,
        handleMouseOver,
        handleMouseOut,
      }}
    >
      {children}
    </ShapeMarkerContext.Provider>
  )
}
