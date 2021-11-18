import './App.css';
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Box />
        <Bucket />
      </div>
    </DndProvider>

  );
}

function Box() {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'BOX',
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  }))

  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1}}>
        {/* The drag ref marks this node as being the "pick-up" node */}
        <div role="Handle" ref={drag} style={{display: 'inline-block', width: 100, height: 100, border: '1px solid black'}}>Box</div>
    </div>
  )
}

function Bucket() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'BOX',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))

  return (
    <div
      ref={drop}
      role={'Dustbin'}
      style={{ backgroundColor: isOver ? 'red' : 'white', display: 'inline-block', width: 100, height: 100, border: '1px solid black' }}
    >
      {canDrop ? 'Release to drop' : 'Drag a box here'}
    </div>
  )
}

export default App;
