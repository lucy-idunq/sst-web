import React, { useState } from 'react'

const Button = props => {
    const { text, style, onClick, className, height, width, type } = props

    const [isHover, setisHover] = useState(false);

    const handleHover = () => {
        setisHover(!isHover);
    }

    const defaultStyle = {
        // height: `${height === undefined ? "100%" : height}`,
        // width:  `${width === undefined ? "100%" : width}`,
        backgroundColor: isHover ? '#FFFF00' : '#FFFF66',
        color: isHover ? '#000' : '#000',
        boxShadow: 'none',
        outline: 'none',
    }

    const userStyle = style === undefined ? {} : style
    return (
        <button
            className={`border btn ${className}`}
            style={{ ...defaultStyle, ...userStyle }}
            type={type === undefined ? 'button' : type}
            onClick={onClick}
            onMouseOver={handleHover}
            onMouseLeave={handleHover}
        >
            {text}
        </button>
    )
}

export default Button;