import React from 'react'
import ph1 from '../../upload/luvph.jpg'
import DqDataTable from '../../common/DqDataTable'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Order = props => {
  return (
    <div>
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
  { name: 'Name', selector: 'name' },
  { name: 'Profile', selector: 'imageUrl', cell: rowData => <div><img src={rowData.imageUrl} alt="image" className="rounded" width={35} /></div> },
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
    name: 'Action',
    selector: 'actions',
    cell: row => <div className="d-flex ">
      <div className="bg-secondary p-1 rounded text-light mx-3" onClick={()=>alert('you edit the table.')}><EditIcon /> </div>
      <div className=" bg-secondary p-1 rounded text-light mx-3" onClick={()=>alert('you delete data-row!')}><DeleteIcon /></div>
    </div>
  },
  

]
const customData = [
  { imageUrl: ph1, name: 'lucy', phone: '0978987899', shopname: 'Baran', birthYear: 1987, customertype: 1, address: 'ygn' },
  { imageUrl: ph1, name: 'sumyat', phone: '0978987899', shopname: 'Baran', birthYear: 2017, customertype: 2, address: 'mdy' },
]