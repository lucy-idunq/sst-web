import React from 'react'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import ph1 from '../../upload/luvph.jpg'
import DqInput from '../../common/DqInput'
import DqButton from '../../common/DqButton'
import DqLink from '../../common/DqLink'

const UserProfile = props => {
    return (
        <div className="pt-3">
            <div className="d-flex flex-wrap justify-content-center pb-2">
                <div className="col-lg-4 col-md-4 col-10">

                    <div className="col-lg-4 col-md-5 col-3 p-0 mx-auto" style={{ borderRadius: '50%', border: '4px solid #e5e5e5', }}>
                        <img src={ph1} alt="profileImage" className="rounded-circle img-fluid " />
                    </div>

                    <div className="py-2 text-center">
                        <label for="upload" className="text-center"
                            style={{ cursor: 'pointer', color: '#999' }}  >
                            click here to change profile image
                        <input type="file" id="upload" hidden />
                        </label>
                        {/* <div className="d-flex justify-content-between">
                            <div> <input type="file" className="form-control-file" id="imageUpload" /> </div>
                            <div><DqButton text="Update" /></div>
                        </div> */}

                    </div>
                    <div className="py-3 ">
                        <DqLink text="Change Password" to={"/password"} className="border rounded text-dark p-2 col-8 col-lg-12" style={{ backgroundColor: '#FFFF66' }} />
                    </div>
                </div>

                <div className="col-lg-8 col-md-8 col-12">
                    <div className="p-4 border border-info rounded">

                        <div className="text-center font-weight-bold py-2">{"Account Information"}</div>
                        <div className="d-flex flex-wrap justify-content-between align-items-center py-2">
                            <div className="col-4">Name </div>
                            <div className="col-8"><DqInput id="name" placeholder="lucy" className="border-top-0 border-left-0 border-right-0" /></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div className="col-4">Phone No</div>
                            <div className="col-8"><DqInput id="phone" value={"098999789"} className="border-top-0 border-left-0 border-right-0" /></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div className="col-4">Email</div>
                            <div className="col-8"><DqInput id="email" type="email" value={"lucy@gmail.com"} className="border-top-0 border-left-0 border-right-0" /></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div className="col-4">Role</div>
                            <div className="col-8"><DqInput id="role" value={"Admin"} className="border-top-0 border-left-0 border-right-0" /></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-2">
                            <div className="col-4">Address</div>
                            <div className="col-8"><DqInput id="address" value={"Mandalay"} className="border-top-0 border-left-0 border-right-0" /></div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-3">
                            <div className="col-4">Remark</div>
                            <div className="col-8"><textarea className="form-control" id="remark" ></textarea></div>
                        </div>

                        <div className="d-flex flex-wrap justify-content-end p-3">
                            <DqButton text="Save" className="col-4 col-lg-2 mx-3" />
                            <DqButton text="Cancel" className="col-4 col-lg-2" />
                        </div>
                        {/* <div className="d-flex justify-content-end py-1">
                            <div className="px-2"><DqButton text="Save" style={{ width: 100 }} /></div>
                            <div className="px-2"><DqButton text="Cancel" style={{ width: 100 }} /></div>
                        </div> */}

                    </div>

                </div>
            </div>
        </div>
    )
}
export default UserProfile;

const activeIconStyle = {
    right: '25px',
    bottom: '38px',
    borderRadius: '50%',
    border: '2px solid #fff',
    backgroundColor: '#4cd137',
    color: '#4cd137',
    textAlign: 'center',
}