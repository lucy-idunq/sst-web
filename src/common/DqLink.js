import React from 'react';
// import {Link} from 'react-router-dom';

const Link = props =>{
    const {text,to,onClick,style,currentLink} = props

    const isSelected = currentLink === to

    const defaultStyle = {
        width:'100%',
        textDecoration:'none',
        display:'inline-block',
        cursor:'pointer',
        whiteSpace:'noWrap',
        color:isSelected ? 'green' : '#ffffff',
        fontWeight:isSelected ? 'bold' : null
    }

    const userStyle = style === undefined ? "" : style
    return(
     <Link 
     to={to}
     onClick={onClick}
     style={{...defaultStyle,...userStyle}}
     className="text-center"
     >
     {text}
     </Link>
    )
}
export default Link;