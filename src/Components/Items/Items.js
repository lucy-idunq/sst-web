import React from 'react';
import { IMG_SERVER } from '../../network/api.config'
import DqTable from '../../common/DqTable';
import ph1 from '../../upload/luvph.jpg'

const Items = props => {

    return (
        <div className="pt-4">
            <DqTable customData={customData} columns={columns} title={"Item List"} />
        </div>
    )
}


export default Items;
const columns = [

    { title: 'Name', field: 'name' },
    { title: 'Image', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{ width: 40, borderRadius: '50%' }} />, filtering: false },
    {
        title: 'Package',
        field: 'packageType',
        lookup: { 1: 'packing', 2: 'small' },
    },
    { title: 'Price', field: 'price', },
    { title: 'Action' }

]


const customData = [
    { name: 'Mehmet', packageType: 2, imageUrl: `${ph1}`, price: 1987, },
    { name: 'Zerya Betül', surname: 'Baran', imageUrl: `${ph1}`, price: 2017, },
]