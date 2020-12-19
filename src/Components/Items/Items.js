import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

// import { IMG_SERVER } from '../../network/api.config'
import DqDataTable from '../../common/DqDataTable'
import DqModal from '../../common/DqModal'
import DqLink from '../../common/DqLink'
// import Breadcrumb from '../../common/Breadcrumb'
import ph1 from '../../upload/luvph.jpg'

const Items = props => {
    // const [crumbs, setCrumbs] = useState(['items', 'item', 'addItem']);

    const AddNewComponent = () => (
        <div className="p-2 bg-secondary rounded text-light" >
            <DqLink to="/item" text={<PlaylistAddIcon />} />
        </div>
    )

    return (
        <div className="">
            {/* <div>
                <Breadcrumb crumbs={crumbs} />
            </div> */}
            <DqDataTable
                title={"Item Table"}
                columns={columns}
                data={customData}
                AddNew
                AddNewComponent={AddNewComponent}
            />
        </div>
    )
}

export default Items;

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

