import React from 'react'
import ph1 from '../../upload/luvph.jpg'
import DqDataTable from '../../common/DqDataTable'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Order = props => {
  return (
    <div>
      <h1>orders</h1>
      <DqDataTable
        title={"Order table"}
        columns={columns}
        data={customData}
      />
    </div>
  )
}
export default Order;

const columns = [
  { name: 'Profile', selector: 'imageUrl', cell: rowData => <div><img src={rowData.imageUrl} alt="image" className="rounded" width={35} /></div> },
  { name: 'Name', selector: 'name' },
  { name: 'Phone-no', selector: 'phone', initialEditValue: '-' },
  { name: 'Shop Name', selector: 'shopname' },
  { name: 'Birth Year', selector: 'birthYear', type: 'numeric' },
  {
    name: 'Customer Type',
    selector: 'customertype',
    lookup: { 1: 'Wholesale', 2: 'Retailer' },
  },
  { name: 'Address', selector: 'address' },
  {
    name: '',
    selector: 'edit',
    cell: row => <div className="bg-secondary p-1 rounded text-light"><EditIcon /></div>
},
{
    name: '',
    selector: 'edit',
    cell: row => <div className="bg-secondary p-1 rounded text-light"><DeleteIcon /> </div>
}

]
const customData = [
  { imageUrl: ph1, name: 'lucy', phone: '0978987899', shopname: 'Baran', birthYear: 1987, customertype: 1, address: 'ygn' },
  { imageUrl: ph1, name: 'sumyat', phone: '0978987899', shopname: 'Baran', birthYear: 2017, customertype: 2, address: 'mdy' },
]