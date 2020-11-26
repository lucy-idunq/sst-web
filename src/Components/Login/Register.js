import React from 'react'
import DqInput from '../../common/DqInput'
import DqSelect from '../../common/DqSelect'
import DqButton from '../../common/DqButton'

const Register = props => {
    const data = [
        { value: 'wholesale', label: 'Wholesale' },
        { value: 'retail', label: 'Retail' },

    ]
    return (
        <div>
            <div className="Login d-flex justify-content-center">
                <div className="card login-card ">
                    <div className="card-header login-card-header">
                        <h3>Register</h3>
                    </div>
                    <div className="card-body login-body">
                    <form>
                        <div className="input-group form-group  pb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fa fa-user" />
                                </span>
                            </div>
                            <DqInput id='name' placeholder="Name" />
                        </div>
                        <div className="input-group form-group  pb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fas fa-mobile-alt" />
                                </span>
                            </div>
                            <DqInput id='phone' placeholder="Phone" />
                        </div>
                        <div className="input-group form-group  pb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fas fa-envelope-square" />
                                </span>
                            </div>
                                <DqInput id='email' placeholder="E-mail" type="email" />
                        </div>
                        <div className="input-group form-group  pb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fas fa-address-card" />
                                </span>
                            </div>
                                <DqInput id='address' placeholder="Address" />
                        </div>
                        <div className="input-group form-group  pb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fa fa-store-alt" />
                                </span>
                            </div>
                                <DqInput id='shop' placeholder="Shop-name" />
                        </div>
                        <div className="input-group form-group  pb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fas fa-location-arrow" />
                                </span>
                            </div>
                                <DqInput id='shoplocation' placeholder="Shop-location" />
                        </div>
                        <div className="row">
                            <div className="input-group form-group col-6 pb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <i className="fa fa-user" />
                                    </span>
                                </div>  
                                <DqInput id='latitude' placeholder="Latitude"/>
                            </div>
                            <div className="input-group form-group col-6 pb-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                    <i className="fa fa-user" />
                                    </span>
                                </div>  
                                <DqInput id='longitude' placeholder="Longitude"/>
                            </div>
                        </div>
                        {/* <div className="border border-danger"> */}
                            {/* <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fa fa-user" />
                                </span>
                            </div> */}
                                <DqSelect data={data} placeholder="Customer Type" className="pb-3"/>
                        {/* </div> */}
                        <div className="input-group form-group  pb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fa fa-key" />
                                </span>
                            </div>
                                <DqInput id='password' placeholder="Password" type="password" />
                        </div>
                        <div className="input-group form-group  pb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fa fa-key" />
                                </span>
                            </div>
                                <DqInput id='confirm-password' placeholder="Confirm-password" type="password" />
                        </div>
                        {/* <div className="input-group form-group  pb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                <i className="fa fa-user" />
                                </span>
                            </div>
                                <textarea id="description" className="form-control" style={{ boxShadow: 'none' }} />
                        </div> */}
                        <div className="d-flex justify-content-around">
                            <DqButton text="Register" />
                            <DqButton text="Cancel" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register;