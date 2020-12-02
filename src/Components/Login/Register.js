import React, { useState } from 'react'
import { newRegisterData } from '../../network/registerFetcher'
import DqInput from '../../common/DqInput'
import DqSelect from '../../common/DqSelect'
import DqButton from '../../common/DqButton'

const Register = props => {
    const [userName, setuserName] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')
    const [shopName, setshopName] = useState('')
    const [shopLocation, setshopLocation] = useState('')
    const [latitude, setlatitude] = useState('')
    const [longitude, setlongitude] = useState('')
    const [customerType, setCustomerType] = useState([
        { value: 'wholesale', label: 'Wholesale' },
        { value: 'retail', label: 'Retail' },
    ])
    const [selectedCustomerType, setselectedCustomerType] = useState(null)
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

  
    const registerSubmit = (e) => {
        e.preventDefault();
        let customerType = selectedCustomerType.value 
        
        let info = { userName, phone, email, address, shopName, shopLocation, latitude, longitude, customerType, password, confirmPassword }
        alert(JSON.stringify(info), null, 2)

    }
 
    return (
        <div>
            <div className="Login d-flex justify-content-center">
                <div className="card login-card ">
                    <div className="card-header login-card-header">
                        <h3>Register</h3>
                    </div>
                    <div className="card-body login-body">
                        <form onSubmit={e => registerSubmit(e)}>
                            <div className="input-group form-group  pb-2">
                                <InputGroupContainer icon="fa fa-user" />
                                <DqInput id='name' placeholder="Name" onChange={(e) => setuserName(e.target.value)} value={userName} value={userName} />
                            </div>
                            <div className="input-group form-group  pb-2">
                                <InputGroupContainer icon="fas fa-mobile-alt" />
                                <DqInput id='phone' placeholder="Phone" onChange={(e) => setphone(e.target.value)} value={phone} />
                            </div>
                            <div className="input-group form-group  pb-2">
                                <InputGroupContainer icon="fas fa-envelope-square" />
                                <DqInput id='email' placeholder="E-mail" type="email" onChange={(e) => setemail(e.target.value)} value={email} />
                            </div>
                            <div className="input-group form-group  pb-2">
                                <InputGroupContainer icon="fas fa-address-card" />
                                <DqInput id='address' placeholder="Address" onChange={(e) => setaddress(e.target.value)} value={address} />
                            </div>
                            <div className="input-group form-group  pb-2">
                                <InputGroupContainer icon="fa fa-store-alt" />
                                <DqInput id='shop' placeholder="Shop-name" onChange={(e) => setshopName(e.target.value)} value={shopName} />
                            </div>
                            <div className="input-group form-group  pb-2">
                                <InputGroupContainer icon="fas fa-location-arrow" />
                                <DqInput id='shoplocation' placeholder="Shop-location" onChange={(e) => setshopLocation(e.target.value)} value={shopLocation} />
                            </div>
                            <div className="row">
                                <div className="input-group form-group col-6 pb-2">
                                    <InputGroupContainer icon="fa fa-user" />
                                    <DqInput id='latitude' placeholder="Latitude" onChange={(e) => setlatitude(e.target.value)} value={latitude} />
                                </div>
                                <div className="input-group form-group col-6 pb-2">
                                    <InputGroupContainer icon="fa fa-user" />
                                    <DqInput id='longitude' placeholder="Longitude" onChange={(e) => setlongitude(e.target.value)} value={longitude} />
                                </div>
                            </div>

                            <DqSelect data={customerType} placeholder="Customer Type" className="pb-3" onChange={(e) => setselectedCustomerType(e)} value={selectedCustomerType} />

                            <div className="input-group form-group  pb-2">
                                <InputGroupContainer icon="fa fa-key" />
                                <DqInput id='password' placeholder="Password" type="password" onChange={(e) => setpassword(e.target.value)} value={password} />
                            </div>

                            <div className="input-group form-group  pb-2">
                                <InputGroupContainer icon="fa fa-key" />
                                <DqInput id='confirm-password' placeholder="Confirm-password" type="password" onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} />
                            </div>

                            <div className="d-flex justify-content-around">
                                <DqButton text="Register" type="submit" />
                                <DqButton text="Cancel" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const InputGroupContainer = ({ icon }) => {
    return (
        <div className="input-group-prepend">
            <span className="input-group-text">
                <i className={icon} />
            </span>
        </div>
    )
}

// const customerType = [
//         { value: 'wholesale', label: 'Wholesale' },
//         { value: 'retail', label: 'Retail' },
//     ]

export default Register;