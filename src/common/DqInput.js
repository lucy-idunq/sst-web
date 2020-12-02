import React, { useState } from 'react';

const Input = props => {
    const { id, style, placeholder, type, value, width, className, onChange, pwdViewer } = props

    const [pwdView, setpwdView] = useState(false)

    const defaultStyle = {
        boxShadow: 'none',
        // outline:'none',
        // border:'1px solid #eeee',

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