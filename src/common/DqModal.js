import React from 'react'

import '../App.css'

const DqModal = props => {
    const { id, text, title } = props
    return (
        <div data-toggle="modal" data-target={`#${id}`} >
            <div className="modal fade" id={id} databackdrop='static' datakeyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark" id="staticBackdropLabel">{title}</h5>
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div className="modal-body text-dark">
                            {text}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={()=>alert('You delete the item successfully.')}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default DqModal;