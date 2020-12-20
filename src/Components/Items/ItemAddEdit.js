import React from 'react'
import { withRouter } from 'react-router-dom'

import DqInput from '../../common/DqInput'
import DqSelect from '../../common/DqSelect'
import DqButton from '../../common/DqButton'
import DqLink from '../../common/DqLink'

const ItemAddEdit = props => {
    const [checked, setChecked] = React.useState(false);

    return (
        <div className="container border border-info rounded mt-4">
            <div className="d-flex justify-content-end p-4">
                <DqLink text="Back" to={"/items"} className="border rounded  p-2 col-lg-1 col-md-2 col-3 text-dark" style={{ backgroundColor: '#FFFF66' }} />
                {/* <DqButton text="Back" style={{ width: 80 }} onClick={backOnclick} /> */}
            </div>
            <div className="col-12 py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4">Name </div>
                    <div className="col-12 col-lg-8"><DqInput id="name" /></div>
                </div>
            </div>

            <div className="col-12 py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4">Item Photo </div>
                    <div className="col-12 col-lg-8 ">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="customFile" />
                            <label className="custom-file-label" for="customFile">Choose file</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4">Price </div>
                    <div className="col-12 col-lg-8"><DqInput id="price" /></div>
                </div>
            </div>
            <div className="form-check p-2 px-5 ">
                <input className="form-check-input" type="checkbox" id="promotion" style={{ cursor: 'pointer', fontSize: 50 }}
                    checked={checked} onChange={() => setChecked(!checked)} />
                <label className="form-check-label" for="promotion">
                    Promotion Item
                </label>
            </div>
            {
                checked &&
                <>
                    <div className="col-12 py-3">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <div className="col-lg-4">Promotion Price </div>
                            <div className="col-12 col-lg-8"><DqInput id="promotionPrice" /></div>
                        </div>
                    </div>
                    <div className="col-12 py-3">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <div className="col-lg-4">Promotion Date </div>
                            <div className="col-12 col-lg-8"><DqInput id="promotionDate" /></div>
                        </div>
                    </div>
                </>
            }
            <div className="col-12 py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4">Warehouse </div>
                    <div className="col-12 col-lg-8"><DqInput id="warehouse" /></div>
                </div>
            </div>

            <div className="col-12 py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4">Packaging </div>
                    <div className="col-12 col-lg-8">
                        <DqSelect id="packaging" placeholder={"select packaging type"} data={PackageType} />
                    </div>
                </div>
            </div>

            <div className="col-12 py-3">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-4">Description </div>
                    <div className="col-12 col-lg-8">
                        <textarea className="form-control" id="description" ></textarea>
                    </div>
                </div>
            </div>

            <div className="col-12 py-3 mb-3">
                <div className="d-flex justify-content-end px-3">
                    <div className="px-3"><DqButton text="Save" style={{ width: 150 }} /> </div>
                    <div ><DqButton text="Cancel" style={{ width: 150 }} /></div>
                </div>
            </div>

        </div>
    )
}
export default withRouter(ItemAddEdit);

const PackageType = [
    { value: 'box', label: 'Box' },
    { value: 'packing', label: 'Packing' },
]