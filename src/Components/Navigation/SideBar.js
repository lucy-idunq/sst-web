import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import logo from '../../upload/sst.jpg'

const SideBar = props => {
    const [isHover, setisHover] = useState(false)
    // console.log(isHover)
    return (
        <div style={{ height: '100vh' }}>
            <div className=" h-100 " style={{ backgroundColor: '#2F4050', color: '#fff' }}>
                <div className="d-flex flex-column " onMouseEnter={() => setisHover(!isHover)} onMouseLeave={() => setisHover(false)} >
                    <div className="text-center pt-4">
                        <img src={logo} alt="logo" className="rounded-circle" width={60} />
                    </div>
                    {
                        SidebarData.map((v, k) => {
                            return (
                                <Link to={v.link} style={{ color: '#fff', textDecoration: 'none' }}><SideBarItem icon={v.icon} title={v.title} isHover /> </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const SideBarItem = ({ icon, title, isHover }) => {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center  p-3 " style={{ cursor: `${isHover && 'pointer'}`, borderBottom: '1px solid #eee' }}>
            <div className="text-left">{icon}</div>
            <div className="px-4 d-none d-lg-inline flex-2">{title}</div>
        </div>
    )
}

export default SideBar;