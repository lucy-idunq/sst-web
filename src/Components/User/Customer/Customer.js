import React from 'react'
import { withRouter } from 'react-router-dom'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import ph1 from '../../../upload/luvph.jpg'
import DqDataTable from '../../../common/DqDataTable'
import DqModal from '../../../common/DqModal'

const Customer = props => {
    const { history ,/*currentLang*/ } = props

    const customerNewPage = () => {
        history.replace('/customer')
    }
    
    return (
        <div className="container-fluid">
            <DqDataTable
                title={"Customer Table"}
                data={customData}
                columns={columns}
                AddNew
                addnewOnClick={customerNewPage}
            />
        </div>

    )
}
export default withRouter(Customer);

const columns = [
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
        // lookup: { 1: 'packing', 2: 'small' },
    },
    {
        name: 'Address', selector: 'address',
    },
    {
        name: 'Location', selector: 'location',
    },
    {
        name: 'Customer Type', selector: 'customerType', grow: 1
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

const customData = [
    { name: 'lucy', imageUrl: `${ph1}`, phoneno: '0989930890', address: 'chanAyetharzan mdy', location: 'mdy', customerType: 'wholesale', summary: 'blah blah blah blach.....' },
    { name: 'sumyat', imageUrl: `${ph1}`, phoneno: '0989930890', address: 'chanAyetharzan mdy', location: 'ygn', customerType: 'retail', summary: 'blah blah blah blach.....' },
]