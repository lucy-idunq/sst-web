import React from 'react';

const Input = props => {
    const { id, style, placeholder, type, value, width, className, onChange, } = props

    const defaultStyle = {
         boxShadow: 'none',
        // outline:'none',
        // border:'1px solid #eeee',
        // "&:hover":{
        //     cursor:'pointer',
        // }
    }

    const userStyle = style === undefined ? {} : style
    return (
        <input
            id={id}
            style={{ ...defaultStyle, ...userStyle }}
            placeholder={placeholder}
            className={`form-control form-rounded ${className}`}
            type={type === undefined ? 'text' : `${type}`}
            onChange={onChange}
            value={value}

        />
    )
}
export default Input;