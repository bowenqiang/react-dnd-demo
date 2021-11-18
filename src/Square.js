import React from 'react'

const Square = (props) => {
    const {black, children} = props
    const backgroundColor = black ? 'black' : 'white'
    const color = black ? 'white': 'black'
    return (
        <div
            style={{color, backgroundColor, height: '100%', width: '100%'}}
        >
            {children}
        </div>
    )
}
export default Square