import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import { SidebarData } from './SidebarData'
import logo from '../../upload/sst.jpg'
import lan from '../../Utils/lan.config'
import Error from '../../ErrorBoundary'

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
// import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const SideBar = props => {
    const { currentLang, divID, setdivID } = props
    const [IconChange, setIconChange] = useState(false) //currently not using@lucy

    const onClickDiv = (id) => {
        setdivID(id);
        setIconChange(!IconChange);
    }
    const lang =  currentLang ===  undefined ? 'en' : currentLang
    return (
        <div className="bg-dark" style={{ height: '100vh', /*'#801500' */}}>
            <div className="d-flex flex-column " >
                <div className="text-center pt-3">
                    <img src={logo} alt="logo" className="rounded-circle" width={70} />
                </div>
                <Link to={'/dashboard'} style={LinkStyle}>
                    <SidebarItem title={lan[lang].dashboard} icon={<DashboardIcon />} id={1} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/orders'} style={LinkStyle}>
                    <SidebarItem title={lan[lang].order} icon={<ShoppingBasketIcon />} id={2} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/items'} style={LinkStyle}>
                    <SidebarItem title={lan[lang].item} icon={<ListIcon />} id={3} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/invoice'} style={LinkStyle}>
                    <SidebarItem title={lan[lang].invoice} icon={<DescriptionIcon />} id={4} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/delivery'} style={LinkStyle}>
                    <SidebarItem title={lan[lang].delivery} icon={<DepartureBoardIcon />} id={5} divID={divID} onClick={onClickDiv} />
                </Link>
                <Link to={'/warehouse'} style={LinkStyle}>
                    <SidebarItem title={lan[lang].warehouse} icon={<HouseTwoToneIcon />} id={6} divID={divID} onClick={onClickDiv} />
                </Link>
                <SidebarItem title={lan[lang].stocks} icon={<ShowChartIcon />} id={7} divID={divID}
                    subItem subItemId='stocks' subItemList={[
                        { id: 8, icon: <StorageIcon />, title: lan[lang].stockItem, link: '/stock-item' },
                        { id: 9, icon: <InboxIcon />, title: lan[lang].stockIn, link: '/stock-in' },
                        { id: 10, icon: <AllOutIcon />, title: lan[lang].stockOut, link: '/stock-out' },
                        { id: 11, icon: <KeyboardReturnIcon />, title: lan[lang].stockReturn, link: '/stock-return' }
                    ]}
                    IconChange={IconChange} onClick={onClickDiv}
                />
                <SidebarItem title={lan[lang].users} icon={<SupervisorAccountIcon />} id={12} divID={divID}
                    subItem subItemId='users' subItemList={[
                        { id: 13, icon: <PersonIcon />, title: lan[lang].customer, link: '/customers', },
                        { id: 14, icon: <AssignmentIndIcon />, title: lan[lang].staff, link: '/staffs', },
                        { id: 15, icon: <AirportShuttleIcon />, title: lan[lang].deliver, link: '/delivers', },
                        { id: 16, icon: <FaceIcon />, title: lan[lang].admin, link: '/admin', },
                    ]}
                    IconChange={IconChange} onClick={onClickDiv}
                />
            </div>
        </div>
    )
}

const SidebarItem = ({ title, icon, id, divID, subItem, subItemId, subItemList, onClick, IconChange }) => (
    <div className="h-100 bg-dark" /*style={{ backgroundColor: '#801500', }}*/>
        <div id={id} onClick={() => onClick(id)}
            data-toggle="collapse" data-target={`#${subItemId}`} aria-expanded="false"
            className="d-flex justify-content-center justify-content-lg-start align-items-center p-3"
            style={{
                cursor: subItem && 'pointer',
                color: `${divID === id ? '#EFFD5F' : "#fff"}`,
                borderLeft: `3px solid ${divID === id ? '#EFFD5F' : "#00000000"}`
            }}>
            <div className="px-1">{icon}</div>
            <div className="px-3 flex-grow-1 d-none d-lg-inline">
                {title}
            </div>
            <div> {subItem && <span><ExpandMoreIcon /></span>}</div>
        </div>
        {
            subItemList &&
            subItemList.map((v, k) => (
                <div id={`${subItemId}`} onClick={() => onClick(v.id)}
                    className="collapse" key={k}>
                    <Link to={v.link} style={LinkStyle}>
                        <div className="d-flex justify-content-center justify-content-lg-start align-items-center p-3"
                            style={{ color: `${divID === v.id ? '#EFFD5F' : "#fff"}`, borderLeft: `3px solid ${divID === v.id ? '#EFFD5F' : "#00000000"}` }}>
                            <div className="px-1">{v.icon}</div>
                            <div className="px-2 flex-grow-1 d-none d-lg-inline">{v.title}</div>
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



