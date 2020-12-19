import React from 'react'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import DqDataTable from '../../common/DqDataTable'
import  DqLink from '../../common/DqLink'
import DqModal from '../../common/DqModal'

const Invoice = props => {
    const AddNewComponent = () => (
        <div className="p-2 bg-secondary rounded text-light" >
            <DqLink to="/invoice" text={<AddIcon />} />
        </div>
    )
    return (
        <div >
            <DqDataTable
                title={"Invoice"}
                columns={columns}
                AddNew
                AddNewComponent={AddNewComponent}
            />
        </div>

    )
}
export default Invoice;

const columns = [
    {
        name: 'Invoice Id',
        selector: 'invoiceId'
    },
    {
        name: 'Item Name',
        selector: 'itemnName'
    },
    {
        name: 'Packaging',
        selector: 'packaging',
    },
    {
        name: 'Price', selector: 'price',
    },
    {
        name: 'Discount%', selector: 'discountPer',
    },
    {
        name: 'Discount Amount', selector: 'discountAmount',
    },
    {
        name: 'Total Amount', selector: 'totalAmount',
    },
    {
        name: 'Status', selector: 'status',
    },
    {
        name: 'Action',
        selector: 'actions',
        cell: row => <div className="d-flex ">
            <div className="bg-secondary p-1 rounded text-light" onClick={() => alert('you edit the table.')}><EditIcon /> </div>
            <div className=" bg-secondary p-1 mx-4 rounded text-light" data-toggle="modal" data-target="#deleteCustomer">
                <DeleteIcon />
                <DqModal id={"deleteCustomer"} text={"Are you sure to remove this customer from list?"} title={"Delete Modal"} />
            </div>
        </div>
    },
]