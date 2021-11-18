import React from 'react'
import Square from './Square'
import { useDrop } from 'react-dnd'
import { Overlay } from './Overlay'

const BoardSquare = (props) => {
    const {x, y, game, children} = props

    const black = (x + y) % 2 === 1

    const [{isOver, canDrop}, drop] = useDrop(() => ({
        accept: 'Knight',
        canDrop: () => game.canMoveKnight(x, y),
        drop: () => game.moveKnight(x,y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    }),[])
    
    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <Overlay type={'Illegal'}/>}
            {!isOver && canDrop && <Overlay type={'Possible'}/>}
            {isOver && canDrop && <Overlay type={'Legal'}/>}
        </div>
    )
}
export default BoardSquare