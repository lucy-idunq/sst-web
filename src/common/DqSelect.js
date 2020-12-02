import React from 'react'
import Select from 'react-select'

const ref = React.createRef()

const DqSelect = (props) =>{
    const { data, onChange, placeholder, className, value, } = props
    return (
                <Select
                    ref={ref}
                    isClearable={true}
                    value={value}
                    onChange={onChange}
                    options={data}
                    placeholder={placeholder}
                    style={{ boxShadow: 'none', outline: 'none' }}
                    className={className}
                />
            )
}

export default DqSelect;