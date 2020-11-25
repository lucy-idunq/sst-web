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
        <div className="">
            <form>
                <div className="form-group row">
                    <label for='name' className="col-3 col-form-label" >Name </label>
                    <div className="col-9">
                        <DqInput id='name' placeholder="Name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for='phone' className="col-3 col-form-label" >Phone </label>
                    <div className="col-9">
                        <DqInput id='phone' placeholder="Phone" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for='email' className="col-3 col-form-label" >Email </label>
                    <div className="col-9">
                        <DqInput id='email' placeholder="E-mail" type="email" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for='address' className="col-3 col-form-label" >Address </label>
                    <div className="col-9">
                        <DqInput id='address' placeholder="Address" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for='shop' className="col-3 col-form-label" >Shop Name </label>
                    <div className="col-9">
                        <DqInput id='shop' placeholder="Shop-name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for='shoplocation' className="col-3 col-form-label" >Shop Location </label>
                    <div className="col-9">
                        <DqInput id='shoplocation' placeholder="Shop-location" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className=" col-6">
                        <div className="row">
                            <label for='latitude' className=" col-5 col-form-label" >Latitude </label>
                            <div className=" col-7">  <DqInput id='latitude' /></div>
                        </div>
                    </div>
                    <div className=" col-6">
                        <div className="row">
                            <label for='longitude' className=" col-5 col-form-label" >Longitude </label>
                            <div className=" col-7">  <DqInput id='longitude' /></div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label for='customer-type' className="col-3 col-form-label" >Select customer</label>
                    <div className="col-9">
                        <DqSelect data={data} placeholder="Customer Type" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for='password' className="col-3 col-form-label" >Password </label>
                    <div className="col-9">
                        <DqInput id='password' placeholder="Password" type="password" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for='confirm-password' className="col-3 col-form-label" >Confirm Password</label>
                    <div className="col-9">
                        <DqInput id='confirm-password' placeholder="Confirm-password" type="password" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for='description' className="col-3 col-form-label" >Description</label>
                    <div className="col-9">
                        <textarea id="description" className="form-control" style={{ boxShadow: 'none' }} />
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <DqButton text="Register" />
                    <DqButton text="Cancel" />
                </div>
            </form>
        </div>
    )
}


export default Register;