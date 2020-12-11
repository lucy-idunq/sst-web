import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import logo from '../../upload/sst.jpg'
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
    const [divID, setdivID] = useState(1)

    const onClickDiv = (id) => {
        // alert(id)
        console.log(id)
        // setdivID(id)
    }
    console.log(divID)
    return (
        <div style={{ height: '100vh', backgroundColor: '#2F4050', color: '#fff' }}>
            <div className="d-flex flex-column " >
                <div className="text-center pt-3">
                    <img src={logo} alt="logo" className="rounded-circle" width={70} />
                </div>
                <Link to={'/dashboard'} style={LinkStyle}>
                    <SidebarItem title="Dashborad" icon={<DashboardIcon />} id={1} divID={divID} onClick={(id) => onClickDiv(id)} />
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
                        { id: 1, icon: <StorageIcon />, title: 'Stock Item', link: '/stock-item' },
                        { id: 2, icon: <InboxIcon />, title: 'Stock In', link: '/stock-in' },
                        { id: 3, icon: <AllOutIcon />, title: 'Stock Out', link: '/stock-out' },
                        { id: 4, icon: <KeyboardReturnIcon />, title: 'Stock Return', link: '/stock-return' }
                    ]}
                    onClick={onClickDiv}
                />
                <SidebarItem title="Users" icon={<SupervisorAccountIcon />} id={8} divID={divID}
                    subItem subItemId='users' subItemList={[
                        { id: 1, icon: <PersonIcon />, title: 'Customer', link: '/customers' },
                        { id: 2, icon: <AssignmentIndIcon />, title: 'Staff', link: '/staff' },
                        { id: 3, icon: <FaceIcon />, title: 'Admin', link: '/admin' }
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

const SidebarItem = ({ title, icon, id, divID, subItem, subItemId, subItemList, onClick }) => {
    console.log({ id, divID, subItemId, subItem, subItemList })
    return (
        <div className="h-100" style={{ backgroundColor: '#2F4050', color: '#fff', }}>
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center p-4"
                data-toggle="collapse" data-target={`#${subItemId}`} aria-expanded="false" aria-controls="collapseExample" onClick={onClick}
                style={{ borderBottom: '1px solid #eee',cursor:subItem && 'pointer' }}>
                <div className="px-1">{icon}</div>
                <div className="px-3 flex-grow-1 d-none d-sm-none d-md-none d-lg-inline">{title}</div>
                {subItem && <div><ExpandMoreIcon /></div>}
            </div>
            {
                subItemList &&
                subItemList.map((v, k) => (
                    <div className="collapse" id={`${subItemId}`} key={k} style={{ borderBottom: '1px solid #eee' }}>
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
}
export default SideBar;
const LinkStyle = {
    textDecoration: 'none', color: '#fff'
}
// const KMListItem = ({ divID, id, text, onClick, theme }) => (
//     <div id={id} onClick={() => onClick(id)}
//         className="pl-3 d-flex flex-row py-4 justify-content-start"
//         style={{
//             borderLeft: `5px solid ${parseInt(divID) === id ? color[theme].blue : "#00000000"} `,
//             borderBottom: `1px solid ${color[theme].graph}`,
//             cursor: "pointer"
//         }} >
//         <span
//             style={{ fontSize: font.labels, color: parseInt(divID) === id ? color[theme].bodyText : color[theme].labelSideBarRight }}  >
//             {text}
//         </span>
//     </div>
// )



