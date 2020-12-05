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
                    <div className="text-center pt-3">
                        <img src={logo} alt="logo" className="rounded-circle" width={70} />
                    </div>
                    {
                        SidebarData.map((v, k) => {
                            return (
                                <Link to={v.link} style={{ color: '#fff', textDecoration: 'none' }} key={k}>
                                    <SideBarItem  icon={v.icon} title={v.title} isHover />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const SideBarItem = ({ icon, title, isHover,  }) => {
    return (
        <div  className="d-flex justify-content-center justify-content-lg-start align-items-center p-4 " style={{ cursor: `${isHover && 'pointer'}`, borderBottom: '1px solid #eee' }}>
            <div className="px-1">{icon}</div>
            <div className="px-3 flex-grow-1 d-none d-sm-none d-md-none d-lg-inline">{title}</div>
        </div>
    )
}

export default SideBar;