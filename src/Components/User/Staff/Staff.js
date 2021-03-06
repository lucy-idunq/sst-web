import React from 'react'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import DqDataTable from '../../../common/DqDataTable'
import DqModal from '../../../common/DqModal'
import DqLink from '../../../common/DqLink'

const Staff = props => {
    const AddNewComponent = () => (
        <div className="p-2 bg-secondary rounded text-light" >
            <DqLink to="/staffs" text={<PersonAddIcon />} />
        </div>
    )
    return (
        <div>
            <DqDataTable
                title={"Staff Table"}
                columns={columns}
                AddNew
                AddNewComponent={AddNewComponent}
            />
        </div>

    )
}
export default Staff;

const columns = [
    {
        name: 'Staff Id',
        selector: 'staffId'
    },
    {
        name: 'Name',
        selector: 'name'
    },
    {
        name: 'Image',
        selector: 'imageUrl',
        cell: row => <div><img src={row.imageUrl} className="rounded" alt="pp" width={35} /></div>,

    },
    {
        name: 'Phone no',
        selector: 'phoneno',
    },
    {
        name: 'Gmail', selector: 'gmail',
    },
    {
        name: 'Address', selector: 'address',
    },
    {
        name: 'Position',
        selector: 'position'
    },
    {
        name: 'Branch',
        selector: 'branch'
    },
    {
        name: 'Join Date', selector: 'joinDate',
    },
    {
        name: 'Summary', selector: 'summary', grow: 3
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
