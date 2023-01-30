import { ReactNode } from 'react'
import Konva from 'konva'

export type ChildrenType = {
  children: ReactNode
}

export type MultiInputValueType = string[]

export type TextShapeType = {
  id: string
  x: number
  y: number
  text: string
  isDragging: boolean
  imageUrl: string
}

type ValidationType = {
  error: boolean
  message: string
}

export type ShapeMarkerContextType = {
  textShapes: TextShapeType[]
  inputValues: MultiInputValueType
  helperText: string
  validation: ValidationType
  islands: string[]
  stage: { width: number; height: number }
  handleDragStart: (e: Konva.KonvaEventObject<DragEvent>) => void
  handleDragEnd: (e: Konva.KonvaEventObject<DragEvent>, text: string) => void
  handleInputChange: (e: React.SyntheticEvent<Element, Event>, values: string[]) => void
  handleAddButtonClick: () => void
  handleMouseOver: (e: Konva.KonvaEventObject<MouseEvent>, text: string) => void
  handleMouseOut: () => void
}
