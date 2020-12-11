import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import { SidebarData } from './SidebarData'
import logo from '../../upload/sst.jpg'
import lan from '../../Utils/lan.config'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListIcon from '@material-ui/icons/List';
import DescriptionIcon from '@material-ui/icons/Description';
import DashboardIcon from "@material-ui/icons/Dashboard";
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import HouseTwoToneIcon from '@material-ui/icons/HouseTwoTone';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import InboxIcon from '@material-ui/icons/Inbox';
import AllOutIcon from '@material-ui/icons/AllOut';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FaceIcon from '@material-ui/icons/Face';
import StorageIcon from '@material-ui/icons/Storage';

const SideBar = props => {
    const { currentLang } = props
    const [divID, setdivID] = useState(1)

    const onClickDiv = (id) => {
        setdivID(id)
    }
    // console.log(divID)
    return (
        <div style={{ height: '100vh', backgroundColor: '#2F4050', color: '#fff' }}>
            <div className="d-flex flex-column " >
                <div className="text-center pt-3">
                    <img src={logo} alt="logo" className="rounded-circle" width={70} />
                </div>
                <Link to={'/dashboard'} style={LinkStyle}>
                    <SidebarItem title={lan[currentLang].dashboard} icon={<DashboardIcon />} id={1} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/orders'} style={LinkStyle}>
                    <SidebarItem title="Order" icon={<ShoppingBasketIcon />} id={2} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/items'} style={LinkStyle}>
                    <SidebarItem title="Item" icon={<ListIcon />} id={3} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/invoice'} style={LinkStyle}>
                    <SidebarItem title="Invoice" icon={<DescriptionIcon />} id={4} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/delivery'} style={LinkStyle}>
                    <SidebarItem title="Delivery" icon={<DepartureBoardIcon />} id={5} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/warehouse'} style={LinkStyle}>
                    <SidebarItem title="Warehouse" icon={<HouseTwoToneIcon />} id={6} divID={divID} onClick={onClickDiv} />
                </Link>
                <SidebarItem title="Stocks" icon={<ShowChartIcon />} id={7} divID={divID}
                    subItem subItemId='stocks' subItemList={[
                        { id: 8, icon: <StorageIcon />, title: 'Stock Item', link: '/stock-item' },
                        { id: 9, icon: <InboxIcon />, title: 'Stock In', link: '/stock-in' },
                        { id: 10, icon: <AllOutIcon />, title: 'Stock Out', link: '/stock-out' },
                        { id: 11, icon: <KeyboardReturnIcon />, title: 'Stock Return', link: '/stock-return' }
                    ]}
                    onClick={onClickDiv}
                />
                <SidebarItem title="Users" icon={<SupervisorAccountIcon />} id={12} divID={divID}
                    subItem subItemId='users' subItemList={[
                        { id: 13, icon: <PersonIcon />, title: 'Customer', link: '/customers', },
                        { id: 14, icon: <AssignmentIndIcon />, title: 'Staff', link: '/staff', },
                        { id: 15, icon: <FaceIcon />, title: 'Admin', link: '/admin', }
                    ]}
                    onClick={onClickDiv}
                />
                {/* ======================version2======================================================================================================================================================== */}
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
                {/* ====================================================================================================================================================== */}
            </div>
        </div>
    )
}

const SidebarItem = ({ title, icon, id, divID, subItem, subItemId, subItemList, onClick }) => (
    <div className="h-100" style={{ backgroundColor: '#2F4050', color: '#fff', }}>
        <div id={id} onClick={() => onClick(id)}
            data-toggle="collapse" data-target={`#${subItemId}`} aria-expanded="false"
            className="d-flex justify-content-center justify-content-lg-start align-items-center p-4"
            style={{
                borderBottom: '1px solid #eee',
                cursor: subItem && 'pointer',
                borderLeft: `3px solid ${divID === id ? '#EFFD5F' : "#00000000"}`
            }}>
            <div className="px-1">{icon}</div>
            <div className="px-3 flex-grow-1 d-none d-sm-none d-md-none d-lg-inline">
                {title}
            </div>
            {subItem && <div><ExpandMoreIcon /></div>}
        </div>
        {
            subItemList &&
            subItemList.map((v, k) => (
                <div id={`${subItemId}`} onClick={() => onClick(v.id)}
                    className="collapse" key={k}
                    style={{ borderBottom: '1px solid #eee', borderLeft:`3px solid ${divID === v.id ? '#EFFD5F' : "#00000000"} ` }}>
                    <Link to={v.link} style={LinkStyle}>
                        <div className="d-flex justify-content-center justify-content-lg-start align-items-center p-3" >
                            <div className="px-2">{v.icon}</div>
                            <div className=" d-none d-lg-inline px-3">{v.title}</div>
                        </div>
                    </Link>
                </div>
            ))
        }
    </div>
)

export default SideBar;

const LinkStyle = {
    textDecoration: 'none', color: '#fff'
}



