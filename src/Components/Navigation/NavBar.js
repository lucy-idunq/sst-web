import React from 'react'

function NavBar() {
    return (
        <React.Fragment>
            <div id = 'content'>
                <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
                {/* <div className="container-fluid "> */}
                    <div className="col-2 p-0">
                        <button
                        type="button"
                        id="sidebarCollapse"
                        className="btn btn-info"
                        >
                        <i className="fa fa-align-justify" />
                        </button>
                    </div>
                    <div className="col-10 ">
                        <div className="row">
                            <div className="nav-menus col-12 text-right">
                                <span>Language</span>
                                <span ><i className="fas fa-bell pr-4 pl-4"></i></span>
                                <span ><button className= "btn btn-secondary">Logout</button></span>
                            </div>
                        </div>
                    </div>
                    
                {/* </div> */}
                </nav>
            </div>
        </React.Fragment>
    )
}

export default NavBar