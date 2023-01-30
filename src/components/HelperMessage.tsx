import { useShapeMarkers } from './providers/ShapeMarkerProvider'
import { Text, Rect, Tag } from 'react-konva'

export const HelperMessage = () => {
  const { helperText } = useShapeMarkers()

  // ヘルパーメッセージを表示するText形状のプロパティ
  const helperTextShapeProps = {
    x: 50,
    y: 50,
    width: 340,
    height: 40,
    text: helperText,
    fontSize: 28,
    fill: '#555',
    align: 'center',
    padding: 8,
  }
  // Rect形状のプロパティ
  const rectShapeProps = {
    x: helperTextShapeProps.x,
    y: helperTextShapeProps.y,
    width: helperTextShapeProps.width,
    height: helperTextShapeProps.height,
    fill: '#dcd3b2',
    shadowColor: '#000',
    shadowOffsetX: 3,
    shadowOffsetY: 3,
    shadowOpacity: 0.5,
    cornerRadius: 10,
  }

  // Tag形状のプロパティ
  const tagShapeProps = {
    fill: rectShapeProps.fill,
    x: 220,
    y: 90,
    pointerDirection: 'down',
    pointerWidth: 30,
    pointerHeight: 20,
    shadowColor: rectShapeProps.shadowColor,
    shadowOffsetX: 1,
    shadowOffsetY: rectShapeProps.shadowOffsetY,
    shadowOpacity: rectShapeProps.shadowOpacity,
  }

  return (
    <>
      <Rect {...rectShapeProps} />
      <Tag {...tagShapeProps} />
      <Text {...helperTextShapeProps} />
    </>
  )
}
