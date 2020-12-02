import React from 'react'
import {Link} from 'react-router-dom'

function SideBar() {
    return (
        <React.Fragment>
            <div className="wrapper">
                <nav id="sidebar" className="sidebar">
                <div className="sidebar-header">
                    <img alt="logo" className="logostyle" src="assets/image/Logo.jpg" />
                    <br />
                    <span className="fontWhite">Admin</span>
                    <p className="text-sm mb-0">Manager</p>
                </div>
                <ul className="components">
                    <li className="parent_class ">
                        <Link to="/dashboard">
                            <i className="fa fa-th-large mr-2" />{" "}
                            Dashboard
                        </Link>
                    </li>
                    <li className="parent_class ">
                        <Link to="/items">
                            <i className="fa fa-th-large mr-2" />{" "}
                            Items
                        </Link>
                    </li>
                    <li className="parent_class ">
                    <Link to="/dashboard">
                        <i className="fa fa-th-large mr-2" />{" "}
                        Orders
                    </Link>
                    </li>
                    <li className="parent_class ">
                    <Link to="/dashboard">
                        <i className="fa fa-th-large mr-2" />{" "}
                        Items
                    </Link>
                    </li>
                </ul>
                </nav>
                </div>
        </React.Fragment>
    )
}

export default SideBar
