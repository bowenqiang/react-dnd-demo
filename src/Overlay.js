import React from 'react'

export const Overlay = ({ type }) => {
	const color = getOverlayColor(type)
	return (
		<div
			className="overlay"
			role={type}
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				height: '100%',
				width: '100%',
				zIndex: 1,
				opacity: 0.5,
				backgroundColor: color,
			}}
		/>
	)
}

function getOverlayColor(type) {
	switch (type) {
		case 'Illegal':
			return 'red'
		case 'Legal':
			return 'green'
		case 'Possible':
			return 'yellow'
	}
}
