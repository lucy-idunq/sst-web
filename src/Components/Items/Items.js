import React from 'react';
// import { IMG_SERVER } from '../../network/api.config'
import DqDataTable from '../../common/DqDataTable'
import ph1 from '../../upload/luvph.jpg'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Items = props => {
    return (
        <div >
            <DqDataTable
                title={"Item table"}
                columns={columns}
                data={customData}
                addNew
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
        cell: row => <div><img src={row.imageUrl} className="rounded" alt="image" width={35} /></div>,

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
            <div className="bg-secondary p-1 rounded text-light mx-3" onClick={()=>alert('you edit the table.')}><EditIcon /> </div>
            <div className=" bg-secondary p-1 rounded text-light mx-3" onClick={()=>alert('you delete data-row!')}><DeleteIcon /></div>
        </div>
    },

]


const customData = [
    { name: 'Mehmet', packageType: 2, imageUrl: `${ph1}`, price: 1987, summary: 'blah..blah..blah..blah...1', edit: 'Edit', delete: 'Delete' },
    { name: 'Zerya Betül', packageType: 2, imageUrl: `${ph1}`, price: 2017, summary: 'blah..blah..blah..blah...2', edit: 'Edit', delete: 'Delete' },
]