import React from 'react'
import { withRouter } from 'react-router-dom'

import DqInput from '../../common/DqInput'
import DqButton from '../../common/DqButton'
import DqLink from '../../common/DqLink'

const PasswordSetting = props => {
    return (
        <div className="container">

            <div className="col-12 py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-3 p-0">Password</div>
                    <div className="col-12 col-lg-8 p-0">
                        <DqInput id="oldPassword" type="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="col-12 py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-3 p-0">New Password</div>
                    <div className="col-12 col-lg-8 p-0">
                        <DqInput id="newPassword" type="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="col-12 py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-3 p-0">Confirm Password</div>
                    <div className="col-12 col-lg-8 p-0">
                        <DqInput id="confirmPassword" type="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-end p-3">
                <DqButton text="Save" className="col-4 col-lg-2 mx-3" />
                <DqLink text="Cancel" to={"/user-profile"} className="border rounded  p-2 col-4 col-lg-2 text-dark" style={{ backgroundColor: '#FFFF66' }} />
            </div>

        </div>
    )
}

export default withRouter(PasswordSetting);

// version1
{/* <div className="container">
    <div className="row align-items-center py-3">
        <label for="oldPassword" className="col-3">Password </label>
        <DqInput id="oldPassword" type="password" placeholder="password" className="col-8" />
    </div>

    <div className="row align-items-center py-3">
        <label for="newPassword" className="col-3">New Password </label>
        <DqInput id="newPassword" type="password" placeholder="password" className="col-8" />
    </div>

    <div className="row align-items-center py-3">
        <label for="confirmPassword" className="col-3">Confirm Password </label>
        <DqInput id="confirmPassword" type="password" placeholder="password" className="col-8" />
    </div>

    <div className="row justify-content-end align-items-center py-3">
        <Dqbutton text="Save" className="px-5" style={{ width: 150 }} />
    </div>
</div> */}