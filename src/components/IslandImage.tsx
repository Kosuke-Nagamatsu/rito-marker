import useImage from 'use-image'
import { useShapeMarkers } from './providers/ShapeMarkerProvider'
import { Image } from 'react-konva'
import type { TextShapeType } from '../types'

export const IslandImage: React.FC<TextShapeType> = props => {
  const { imageUrl, id, x, y, isDragging, text } = props
  const { handleDragStart, handleDragEnd, handleMouseOut } = useShapeMarkers()
  const [image] = useImage(imageUrl)

  return (
    <Image
      width={100}
      height={120}
      stroke='#FFF'
      strokeWidth={8}
      shadowColor='#000'
      shadowOffsetY={2}
      shadowBlur={4}
      shadowOpacity={0.3}
      image={image}
      id={id}
      x={x}
      y={y}
      draggable
      scaleX={isDragging ? 1.2 : 1}
      scaleY={isDragging ? 1.2 : 1}
      onDragStart={handleDragStart}
      onDragEnd={event => handleDragEnd(event, text)}
      onMouseOut={handleMouseOut}
    />
  )
}
