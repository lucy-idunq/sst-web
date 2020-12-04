import React from 'react';
// import { IMG_SERVER } from '../../network/api.config'
import DqDataTable from '../../common/DqDataTable'
import ph1 from '../../upload/luvph.jpg'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Items = props => {

    return (
        <div>
            <DqDataTable
                title={"Item table"}
                columns={columns}
                data={customData}
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
        cell: row => <div><img src={row.imageUrl} className="rounded w-50" alt="image" /></div>,

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
        name: 'Summary', selector: 'summary',grow:3
    },
    {
        name: '',
        selector: 'edit',
        cell: row => <div className="bg-secondary p-2 rounded text-light"><EditIcon /></div>
    },
    {
        name: '',
        selector: 'edit',
        cell: row => <div className="bg-secondary p-2 rounded text-light"><DeleteIcon /> </div>
    }

]


const customData = [
    { name: 'Mehmet', packageType: 2, imageUrl: `${ph1}`, price: 1987,summary:'blah..blah..blah..blah...1', edit: 'Edit',delete:'Delete' },
    { name: 'Zerya Betül', packageType: 2, imageUrl: `${ph1}`, price: 2017,summary:'blah..blah..blah..blah...2', edit: 'Edit',delete:'Delete' },
]