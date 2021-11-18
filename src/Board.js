import React, { useEffect, useMemo, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'
import { Game } from './Game'
import Piece from './Piece'

const Board = () => {
    const game = useMemo(() => new Game(), [])
    const [[knightX, knightY], setKnightPos] = useState(game.knightPosition)
    useEffect(() => game.observe(setKnightPos))

    const renderSquare = (i) => {
        const x = i % 8
        const y = Math.floor(i / 8)
        return (
            <div key={i} style={{width: '12.5%', height: '12.5%'}}>
                <BoardSquare x={x} y={y} game={game}>
                    <Piece isKnight={x === knightX && y === knightY}/>
                </BoardSquare>
            </div>
        )
    }
    const squares = []
    for (let i = 0; i < 64; i += 1) {
        squares.push(renderSquare(i))
    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{width: 500, height: 500, border: '1px solid black'}}>
                <div style={{width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap'}}>{squares}</div>
            </div>
        </DndProvider>
    )
}
export default Board