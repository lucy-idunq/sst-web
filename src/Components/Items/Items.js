import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// import { IMG_SERVER } from '../../network/api.config'
import DqDataTable from '../../common/DqDataTable'
import DqModal from '../../common/DqModal'
// import Breadcrumb from '../../common/Breadcrumb'
import ph1 from '../../upload/luvph.jpg'

const Items = props => {
    const {history} = props
    // const [crumbs, setCrumbs] = useState(['items', 'item', 'addItem']);

    const newPage = () => {
        history.replace('/item')
        // conosle.log('hi new page') location.pathname.slice(1)
    }

    return (
        <div className="container-fluid">
            {/* <div>
                <Breadcrumb crumbs={crumbs} />
            </div> */}
            <DqDataTable
                title={"Item Table"}
                columns={columns}
                data={customData}
                AddNew
                addnewOnClick={newPage}
            />
        </div>
    )
}

export default withRouter(Items);

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
        name: 'Package',
        selector: 'packageType',
        // lookup: { 1: 'packing', 2: 'small' },
    },
    {
        name: 'Price', selector: 'price',
    },
    {
        name: 'Summary', selector: 'summary', grow: 3
    },
    {
        name: 'Action',
        selector: 'actions',
        cell: row => <div className="d-flex ">
            <div className="bg-secondary p-1 rounded text-light" onClick={() => alert('you edit the table.')}><EditIcon /> </div>
            <div className=" bg-secondary p-1 mx-4 rounded text-light" data-toggle="modal" data-target="#deleteItem">
                <DeleteIcon />
                <DqModal id={"deleteItem"} text={"Are you sure to delete this item?"} title={"Delete Modal"} />
            </div>
        </div>
    },
]

const customData = [
    { name: 'Mehmet', packageType: 2, imageUrl: `${ph1}`, price: 1987, summary: 'blah..blah..blah..blah...1', edit: 'Edit', delete: 'Delete' },
    { name: 'Zerya Betül', packageType: 2, imageUrl: `${ph1}`, price: 2017, summary: 'blah..blah..blah..blah...2', edit: 'Edit', delete: 'Delete' },
    { name: 'Zerya Betül', packageType: 2, imageUrl: `${ph1}`, price: 2017, summary: 'blah..blah..blah..blah...2', edit: 'Edit', delete: 'Delete' },
    { name: 'Mehmet', packageType: 2, imageUrl: `${ph1}`, price: 1987, summary: 'blah..blah..blah..blah...1', edit: 'Edit', delete: 'Delete' },
    { name: 'Mehmet', packageType: 2, imageUrl: `${ph1}`, price: 1987, summary: 'blah..blah..blah..blah...1', edit: 'Edit', delete: 'Delete' },
    { name: 'Zerya Betül', packageType: 2, imageUrl: `${ph1}`, price: 2017, summary: 'blah..blah..blah..blah...2', edit: 'Edit', delete: 'Delete' },
]

