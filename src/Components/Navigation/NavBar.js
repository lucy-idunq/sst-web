import React from 'react'
import ReorderIcon from '@material-ui/icons/Reorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const NavBar = props => {
    const { setsidebarOpen, sidebarOpen } = props
    return (
        <div className="d-flex flex-grow-1 align-items-center navbar bg-secondary text-light">
            <div className="rounded p-1" style={{ cursor: 'pointer',background:'#2F4050' }} onClick={() => setsidebarOpen(!sidebarOpen)}>
                <ReorderIcon />
            </div>
            <div className="d-flex align-items-center">
            <div className="dropdown ">
                    <div className="nav-link dropdown-toggle" data-toggle="dropdown">Language</div>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><div class="dropdown-item">English</div></li>
                        <div className="dropdown-divider" />
                        <li><div class="dropdown-item">Myanmar</div></li>
                    </ul>
                </div>
                <div > <NotificationsIcon /></div>
                <div className="dropdown ">
                    <div className="nav-link dropdown-toggle" data-toggle="dropdown">
                        <AccountCircleIcon />
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><div className="dropdown-item">User Profile</div></li>
                        <div className="dropdown-divider" />
                        <li><div className="dropdown-item">Logout</div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;