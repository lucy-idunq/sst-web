import React from 'react'

import DqDataTable from '../../common/DqDataTable'

const StockItem = props => {
    return (
        <div>
            <DqDataTable
                title={"Stock Items"}
                columns={columns}
            />
        </div>
    )
}
export default StockItem;

const columns = [
    {
        name: 'No',
        selector: 'no'
    },
    {
        name: 'Item name',
        selector: 'name'
    },
    {
        name: 'Item Photo',
        selector: 'imageUrl',
        cell: row => <div><img src={row.imageUrl} className="rounded" alt="pp" width={35} /></div>,

    },
    {
        name: 'Packaging',
        selector: 'packaging',
        // lookup: { 1: 'packing', 2: 'small' },
    },
    {
        name: 'quantity', selector: 'quantity',
    },
]