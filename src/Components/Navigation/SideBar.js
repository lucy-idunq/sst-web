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
    const [IconChange, setIconChange] = useState(false)

    const onClickDiv = (id) => {
        setdivID(id);
        setIconChange(!IconChange);
    }
    // console.log(divID)
    return (
        <div style={{ height: '100vh', backgroundColor: '#2F4050' }}>
            <div className="d-flex flex-column " >
                <div className="text-center pt-3">
                    <img src={logo} alt="logo" className="rounded-circle" width={70} />
                </div>
                <Link to={'/dashboard'} style={LinkStyle}>
                    <SidebarItem title={lan[currentLang].dashboard} icon={<DashboardIcon />} id={1} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/orders'} style={LinkStyle}>
                    <SidebarItem title={lan[currentLang].order} icon={<ShoppingBasketIcon />} id={2} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/items'} style={LinkStyle}>
                    <SidebarItem title={lan[currentLang].item} icon={<ListIcon />} id={3} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/invoice'} style={LinkStyle}>
                    <SidebarItem title={lan[currentLang].invoice} icon={<DescriptionIcon />} id={4} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/delivery'} style={LinkStyle}>
                    <SidebarItem title={lan[currentLang].delivery} icon={<DepartureBoardIcon />} id={5} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/warehouse'} style={LinkStyle}>
                    <SidebarItem title={lan[currentLang].warehouse} icon={<HouseTwoToneIcon />} id={6} divID={divID} onClick={onClickDiv} />
                </Link>
                <SidebarItem title={lan[currentLang].stocks} icon={<ShowChartIcon />} id={7} divID={divID}
                    subItem subItemId='stocks' subItemList={[
                        { id: 8, icon: <StorageIcon />, title: lan[currentLang].stockItem, link: '/stock-item' },
                        { id: 9, icon: <InboxIcon />, title: lan[currentLang].stockIn, link: '/stock-in' },
                        { id: 10, icon: <AllOutIcon />, title: lan[currentLang].stockOut, link: '/stock-out' },
                        { id: 11, icon: <KeyboardReturnIcon />, title: lan[currentLang].stockReturn, link: '/stock-return' }
                    ]}
                    IconChange={IconChange} onClick={onClickDiv}
                />
                <SidebarItem title={lan[currentLang].users} icon={<SupervisorAccountIcon />} id={12} divID={divID}
                    subItem subItemId='users' subItemList={[
                        { id: 13, icon: <PersonIcon />, title: lan[currentLang].customer, link: '/customers', },
                        { id: 14, icon: <AssignmentIndIcon />, title: lan[currentLang].staff, link: '/staff', },
                        { id: 15, icon: <FaceIcon />, title: lan[currentLang].admin, link: '/admin', }
                    ]}
                    IconChange={IconChange} onClick={onClickDiv}
                />
            </div>
        </div>
    )
}

const SidebarItem = ({ title, icon, id, divID, subItem, subItemId, subItemList, onClick, IconChange }) => (
    <div className="h-100" style={{ backgroundColor: '#2F4050', }}>
        <div id={id} onClick={() => onClick(id)}
            data-toggle="collapse" data-target={`#${subItemId}`} aria-expanded="false"
            className="d-flex justify-content-center justify-content-lg-start align-items-center p-3"
            style={{
                // borderBottom: '1px solid #eee',
                cursor: subItem && 'pointer',
                color: `${divID === id ? '#EFFD5F' : "#fff"}`,
                borderLeft: `3px solid ${divID === id ? '#EFFD5F' : "#00000000"}`
            }}>
            <div className="px-1">{icon}</div>
            <div className="px-3 flex-grow-1 d-none d-sm-none d-md-none d-lg-inline">
                {title}
            </div>
            <div> {subItem && <span><ExpandMoreIcon /></span>}</div>
        </div>
        {
            subItemList &&
            subItemList.map((v, k) => (
                <div id={`${subItemId}`} onClick={() => onClick(v.id)}
                    className="collapse" key={k}
                   /* style={{ borderBottom: '1px solid #eee' }}*/>
                    <Link to={v.link} style={LinkStyle}>
                        <div className="d-flex justify-content-center justify-content-lg-start align-items-center p-3"
                            style={{ color: `${divID === v.id ? '#EFFD5F' : "#fff"}`, borderLeft: `3px solid ${divID === v.id ? '#EFFD5F' : "#00000000"}` }}>
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



