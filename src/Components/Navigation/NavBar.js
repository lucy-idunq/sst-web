import React from 'react'

import ReorderIcon from '@material-ui/icons/Reorder';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import ph1 from '../../upload/luvph.jpg';
import DqLink from '../../common/DqLink'
import lan from '../../Utils/lan.config'

const NavBar = props => {
    const { setSidebarOpen, sidebarOpen, setcurrentLang, currentLang } = props
    // const { setLangIndex, langIndex } = props

    const handleLanguage = (e) => {
        let language = e.target.id === '' || undefined ? 'en' : e.target.id
        setcurrentLang(language)
    }
    const lang =  currentLang ===  undefined  ? 'en' : currentLang
    return (
        <div className="d-flex flex-wrap align-items-center navbar mb-0 text-light bg-dark" /*style={{position:'relative',right:0,backgroundColor: '#b5341d'}}*/  >
            {/* <div className="container-fluid"> */}
            <div className="rounded p-1" style={{ cursor: 'pointer', background: '#b2b2b2' }} onClick={() => setSidebarOpen(!sidebarOpen)}>
                <ReorderIcon style={{fontSize:28}}/>
            </div>
            <div className="d-flex align-items-center">
                <div className="dropdown nav-link" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}>
                    <div className="p-2 rounded " data-toggle="dropdown" style={{ background: '#2F4050' }}>
                        <span> {lan[lang].language} </span>
                        <span className="d-none d-sm-inline "><ArrowDropDownIcon /></span>
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right bg-secondary" onClick={handleLanguage} /*style={{ right: 0, left: 'auto' }}*/>
                        <li>
                            <div className="dropdown-item text-light bg-transparent" id="en">
                                {lan[lang].english}
                            </div>
                        </li>
                        <div className="dropdown-divider" />
                        <li>
                            <div className="dropdown-item text-light bg-transparent" id="mm">
                                {lan[lang].myanmar}
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="px-2"> <NotificationsIcon /></div>

                <div className="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}>
                    <div className="nav-link" data-toggle="dropdown" >
                        <div style={greenIconStyle}></div>
                        <div style={imageInnerStyle}>
                            <img src={ph1} alt="pp" className="rounded-circle" width={45} height={45} />
                        </div>
                        {/*  <AccountCircleIcon style={{ fontSize: 45 }} /> */}
                    </div>
                    <ul className="dropdown-menu dropdown-menu-right bg-secondary text-light">
                        <li className="dropdown-item bg-transparent">
                            <DqLink text={lan[lang].profile} to={'/user-profile'} />
                        </li>
                        <div className="dropdown-divider " />
                        <li className="dropdown-item bg-transparent text-white text-center">
                            <div>{lan[lang].logOut}</div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* </div> */}
        </div>
    )
}

export default NavBar;

const greenIconStyle = {
    backgroundColor: '#4cd137',
    position: 'absolute',
    right: '20px',
    bottom: '10px',
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    border: '1px solid #fff'
}
const imageInnerStyle = {
    borderRadius: '50%',
    padding: '1px 2px',
    background: '#e5e5e5',
}