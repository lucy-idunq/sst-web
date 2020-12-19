import React from 'react'
import ph1 from '../../upload/luvph.jpg'
import DqDataTable from '../../common/DqDataTable'
import DqModal from '../../common/DqModal'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Order = props => {
 // const { location } = props
 const ExpandComponent =()=>{
   return(
     <div className="p-4">It's expand component</div>
   )
 }
  return (
    <div>
    
    <DqDataTable
        title={"Order Table"}
        columns={columns}
        data={customData}
        expand
        ExpandComponent={ExpandComponent}
      />
    </div>
  )
}
export default Order;

const columns = [
  { name: 'OrderId', selector: 'orderId' },
  {
    name: 'Customer', selector: 'customer', grow: 2,
     cell: rowData => 
     <div className="d-flex justify-content-between align-items-center">
       <div><img src={rowData.imageUrl} alt="pp" className="rounded" width={35} /></div>
       <div className="px-4">{rowData.customer} </div>
    </div>
  },
  { name: 'Address', selector: 'address' },

  { name: 'Ordered', selector: 'orderDate' },
  {
    name: 'CustomerType',
    selector: 'customertype',
    lookup: { 1: 'Wholesale', 2: 'Retailer' },
  },
  { name: 'Total', selector: 'total' },
  { name: 'Status', selector: 'status', 
    cell: rowData => 
    <div className=" p-2 border rounded">
      <span><i class="fa fa-circle" aria-hidden="true"></i></span> 
      <span> {rowData.status}</span>
  </div>
},
  {
    name: 'Action',
    selector: 'actions',
    cell: row => <div className="d-flex ">
      <div className="bg-secondary p-1 rounded text-light" onClick={() => alert('you edit the table.')}><EditIcon /> </div>
      <div className=" bg-secondary p-1 mx-4 rounded text-light" data-toggle="modal" data-target="#deleteOrder">
        <DeleteIcon />
        <DqModal id={"deleteOrder"} text={"Are you sure to delete this order?"} title={"Delete Modal"} />
      </div>
    </div>
  },
]

const customData = [
  { id: '1', orderId: '#10001', imageUrl: ph1, customer: 'lucy', phone: '0978987899', total: 19870, customertype: 'wholesale', address: 'ygn', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10002', imageUrl: ph1, customer: 'sumyat', phone: '0978987899', total: 20170, customertype: 'retail', address: 'mdy', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10003', imageUrl: ph1, customer: 'sumyat', phone: '0978987899', total: 20170, customertype: 'wholesale', address: 'mdy', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10004', imageUrl: ph1, customer: 'sumyat', phone: '0978987899', total: 20107, customertype: 'retail', address: 'mdy', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10005', imageUrl: ph1, customer: 'lucy', phone: '0978987899', total: 19807, customertype: 'wholesale', address: 'ygn', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10006', imageUrl: ph1, customer: 'lucy', phone: '0978987899', total: 19807, customertype: 'retail', address: 'ygn', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10006', imageUrl: ph1, customer: 'lucy', phone: '0978987899', total: 19807, customertype: 'retail', address: 'ygn', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10006', imageUrl: ph1, customer: 'lucy', phone: '0978987899', total: 19807, customertype: 'retail', address: 'ygn', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10006', imageUrl: ph1, customer: 'lucy', phone: '0978987899', total: 19807, customertype: 'retail', address: 'ygn', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10006', imageUrl: ph1, customer: 'lucy', phone: '0978987899', total: 19807, customertype: 'retail', address: 'ygn', orderDate: '21-11-2020', status: 'ongoing' },
  { id: '1', orderId: '#10006', imageUrl: ph1, customer: 'lucy', phone: '0978987899', total: 19807, customertype: 'retail', address: 'ygn', orderDate: '21-11-2020', status: 'ongoing' },
]