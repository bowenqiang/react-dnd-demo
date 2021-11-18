import React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import { knightImage } from './knightImage'
const Knight = () => {
    const [{isDragging}, drag, preview] = useDrag(() => ({
        type: 'Knight',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }),[])
    return (
        <>
            <DragPreviewImage connect={preview} src={knightImage}/>
            <div ref={drag} style={{fontSize: '40px', fontWeight: 'bold', cursor: 'move', opacity: isDragging ? 0.5:1}}>
                ♘
            </div>
        </>
    )
}
export default Knight