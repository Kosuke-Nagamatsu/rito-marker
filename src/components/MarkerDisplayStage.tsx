import { useShapeMarkers } from './providers/ShapeMarkerProvider'
import { Stage, Layer, Star, Text } from 'react-konva'
import { IslandImage } from './IslandImage'
import { HelperMessage } from './HelperMessage'
import { TextShapeType } from '../types'
import backgroundImage from '../images/japan_map.jpg'

export const MarkerDisplayStage = () => {
  const {
    textShapes,
    helperText,
    stage,
    handleDragStart,
    handleDragEnd,
    handleMouseOver,
    handleMouseOut,
  } = useShapeMarkers()

  // 横幅がステージの約80％未満であれば左側と判定
  const isLocatedLeftScreen = (shape: TextShapeType) => {
    const midpointX = stage.width * 0.8
    return shape.x < midpointX
  }

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '80% auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Stage {...stage}>
        <Layer>
          {helperText && <HelperMessage />}
          {textShapes.map(shape =>
            isLocatedLeftScreen(shape) ? (
              <Star
                key={shape.id}
                id={shape.id}
                x={shape.x}
                y={shape.y}
                numPoints={5}
                innerRadius={20}
                outerRadius={40}
                fill={'#FF8C00'}
                opacity={0.8}
                draggable
                scaleX={shape.isDragging ? 0.7 : 0.5}
                scaleY={shape.isDragging ? 0.7 : 0.5}
                onDragStart={handleDragStart}
                onDragEnd={event => handleDragEnd(event, shape.text)}
                onMouseOver={event => handleMouseOver(event, shape.text)}
                onMouseOut={handleMouseOut}
              />
            ) : shape.imageUrl ? (
              <IslandImage key={shape.id} {...shape} />
            ) : (
              <Text
                key={shape.id}
                id={shape.id}
                x={shape.x}
                y={shape.y}
                text={shape.text}
                fontSize={24}
                fill={'#555'}
                draggable
                scaleX={shape.isDragging ? 1.2 : 1}
                scaleY={shape.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={event => handleDragEnd(event, shape.text)}
                onMouseOut={handleMouseOut}
              />
            )
          )}
        </Layer>
      </Stage>
    </section>
  )
}
