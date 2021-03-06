import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import logo from '../../upload/sst.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                        SidebarData.map((v, k) => (
                            <Link to={v.link} style={{ color: '#fff', textDecoration: 'none' }} key={k}>
                                <SideBarItem icon={v.icon} title={v.title} child={v.children} isHover />
                            </Link>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const SideBarItem = ({ icon, title, isHover, child, }) => {
    return (
        // <div>
        <div className="d-flex justify-content-center justify-content-lg-start align-items-center p-4 " style={{ cursor: `${isHover && 'pointer'}`, borderBottom: '1px solid #eee' }}>
            <div className="px-1">{icon}</div>
            <div className="px-3 flex-grow-1 d-none d-sm-none d-md-none d-lg-inline">{title}</div>
            {child &&
                <div>
                    <ExpandMoreIcon />
                </div>

            }
        </div>
        // </div>
    )
}


export default SideBar;

{/* ======================version2======================================================================================================================================================== */ }
{/* {
                    SidebarData.map((v, k) => (
                        <div className="h-100" style={{ backgroundColor: '#2F4050', color: '#fff', }} key={k}>
                            <Link to={v.link} style={{ textDecoration: 'none', color: '#fff' }}>
                                <div className="d-flex justify-content-center justify-content-lg-start align-items-center p-4"
                                    data-toggle="collapse" data-target={`#${v.id}`} aria-expanded="false" aria-controls="collapseExample"
                                    style={{ cursor: `${isHover && 'pointer'}`, borderBottom: '1px solid #eee', }}>
                                    <div className="px-1">{v.icon}</div>
                                    <div className="px-3 flex-grow-1 d-none d-sm-none d-md-none d-lg-inline">{v.title}</div>
                                    {v.children && <div><ExpandMoreIcon /></div>}
                                </div>
                            </Link>
                            {
                                v.children &&
                                v.children.map((v, k) => (
                                    <div className="collapse" id={`${v.id}`} key={k} style={{ borderBottom: '1px solid #eee' }}>
                                        <Link to={v.link} style={{ textDecoration: 'none', color: '#fff' }}>
                                            <div className="d-flex justify-content-center justify-content-lg-start align-items-center p-3" >
                                                <div className="px-2">{v.icon}</div>
                                                <div className=" d-none d-lg-inline px-3">{v.title}</div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                } */}
{/* ====================================================================================================================================================== */ }