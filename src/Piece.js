import React from 'react'
import Knight from './Knight'
const Piece = (props) => {
    const {isKnight} = props
    return isKnight ? <Knight /> : null
}
export default Piece