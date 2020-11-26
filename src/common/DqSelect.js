import React from 'react'
import Select from 'react-select'

const DqSelect = props => {
    const { data, onChange, placeholder ,className} = props
    return (

        <Select
            isClearable={true}
            value={data.label}
            onChange={onChange}
            options={data}
            placeholder={placeholder}
            style={{ boxShadow: 'none', outline: 'none' }}
            className={className}
        />

    )
}

export default DqSelect;