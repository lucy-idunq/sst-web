import React from 'react'
import { withRouter } from 'react-router-dom'

import DqInput from '../../../common/DqInput'
import DqButton from '../../../common/DqButton'
import DqSelect from '../../../common/DqSelect'
import DqLink from '../../../common/DqLink'

const CustomerAddEdit = props => {
    const backOnclick = () => {
        props.history.push('/customers')
    }
    return (
        <div className="container p-0">
            <div className="d-flex justify-content-end p-3">
                <DqLink text="Back" to={"/customers"} className="border rounded  p-2 col-lg-1 col-md-2 col-3 text-dark" style={{ backgroundColor: '#FFFF66' }} />
                {/* <DqButton text="Back" style={{ width: 80 }} onClick={backOnclick} /> */}
            </div>
            <div className="col-12 py-2">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4 p-0">Customer name </div>
                    <div className="col-12 col-lg-8 p-0"><DqInput id="customername" /></div>
                </div>
            </div>

            <div className="col-12 py-2">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4 p-0">Profile Photo </div>
                    <div className="col-12 col-lg-8 p-0 ">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" for="customFile">Choose file</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 py-2">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4 p-0">Phone number </div>
                    <div className="col-12 col-lg-8 p-0"><DqInput id="phoneno" /></div>
                </div>
            </div>

            <div className="col-12 py-2">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4 p-0">Address </div>
                    <div className="col-12 col-lg-8 p-0"><DqInput id="address" /></div>
                </div>
            </div>

            <div className="col-12 py-2">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4 p-0">Location </div>
                    <div className="col-12 col-lg-8 p-0"><DqInput id="location" /></div>
                </div>
            </div>

            <div className="col-12 py-2">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4 p-0">Customer Type </div>
                    <div className="col-12 col-lg-8 p-0">
                        <DqSelect id="customerType" placeholder={"select customer type"} data={customerType} />
                    </div>
                </div>
            </div>

            <div className="col-12 py-2">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4 p-0">Description </div>
                    <div className="col-12 col-lg-8 p-0">
                        <textarea className="form-control" id="description" ></textarea>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-end p-3">
                <DqButton text="Save" className="col-4 col-lg-2 mx-3" />
                <DqButton text="Cancel" className="col-4 col-lg-2"/>
            </div>

        </div>
    )
}
export default withRouter(CustomerAddEdit);

const customerType = [
    { value: 'wholesale', label: 'Wholesale' },
    { value: 'retail', label: 'Retail' },
]