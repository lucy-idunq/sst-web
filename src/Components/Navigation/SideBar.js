import React from 'react'
import {Link} from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import StoreIcon from '@material-ui/icons/Store';
import DescriptionIcon from '@material-ui/icons/Description';

function SideBar() {
    return (
        <React.Fragment>
            <div className="wrapper">
                <nav id="sidebar" className="sidebar">
                <div className="sidebar-header">
                    <img alt="logo" className="logostyle" src="Image/sst.jpg" />
                    <br />
                    <span className="fontWhite">Admin</span>
                    <p className="text-sm mb-0">Manager</p>
                </div>
                <ul className="components">
                    <li className="parent_class ">
                        <Link to="/">
                            <DashboardIcon className="mr-2"/>{" "}
                            Dashboard
                        </Link>
                    </li>
                    <li className="parent_class ">
                        <Link to="/items">
                            <FormatListBulletedIcon className="mr-2" />{" "}
                            Items
                        </Link>
                    </li>
                    <li className="parent_class ">
                    <Link to="/dashboard">
                        <ShoppingBasketIcon className="mr-2"/>{" "}
                        Orders
                    </Link>
                    </li>
                    <li>
                    <Link to="/dashboard">
                        <DescriptionIcon className="mr-2"/>{" "}
                        Invoice
                    </Link> 
                    </li>
                    <li className="parent_class ">
                    <Link to="/dashboard">
                        <StoreIcon className="mr-2" />{" "}
                        Inventory Stock
                    </Link>
                    </li>
                </ul>
                </nav>
                </div>
        </React.Fragment>
    )
}

export default SideBar
