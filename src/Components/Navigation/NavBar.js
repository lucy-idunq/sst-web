import React from 'react'
import ph1 from '../../upload/luvph.jpg';
import ReorderIcon from '@material-ui/icons/Reorder';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DqLink from '../../common/DqLink'


const NavBar = props => {
    const { setSidebarOpen, sidebarOpen } = props
    const { setLangIndex, langIndex } = props
    return (
        <div className="d-flex flex-wrap align-items-center navbar bg-secondary text-light" /*style={{position:'relative',right:0}}*/  >
            {/* <div className="container-fluid"> */}
            <div className="rounded p-1" style={{ cursor: 'pointer', background: '#2F4050' }} onClick={() => setSidebarOpen(!sidebarOpen)}>
                <ReorderIcon />
            </div>
            <div className="d-flex align-items-center">
                <div className="dropdown nav-link" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}>
                    <div className="p-1 rounded " data-toggle="dropdown" style={{ background: '#2F4050' }}>
                        Language 
                    <span className="d-none d-sm-inline "><ArrowDropDownIcon /></span>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right bg-secondary" /*style={{ right: 0, left: 'auto' }}*/>
                        <li><div className="dropdown-item text-light bg-transparent" onClick={() => setLangIndex(!langIndex)}>English</div></li>
                        <div className="dropdown-divider" />
                        <li><div className="dropdown-item text-light bg-transparent" onClick={() => setLangIndex(!langIndex)}>Myanmar</div></li>
                    </ul>
                </div>

                <div className="px-2"> <NotificationsIcon /></div>

                <div className="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}>
                    <div className="nav-link" data-toggle="dropdown" >
                        {/* <AccountCircleIcon /> */}
                        <img src={ph1} alt="pp" className="rounded-circle" width={40} height={40} />
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right bg-secondary text-light">
                        <li className="dropdown-item bg-transparent">
                            <DqLink text="User Profile" to={'/user-profile'} />
                        </li>
                        <div className="dropdown-divider " />
                        {/* <li className="dropdown-item bg-transparent">
                            <DqLink text="Password" to={'/password'} />
                        </li>
                        <div className="dropdown-divider " /> */}
                        <li className="dropdown-item bg-transparent text-white text-center">
                            <div>Log out</div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* </div> */}
        </div>
    )
}

export default NavBar;
