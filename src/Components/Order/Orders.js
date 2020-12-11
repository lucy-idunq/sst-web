import React from 'react'
import {withRouter} from 'react-router-dom'
import ph1 from '../../upload/luvph.jpg'
import DqDataTable from '../../common/DqDataTable'
import DqModal from '../../common/DqModal'
import Breadcrumb from '../../common/Breadcrumb'

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Order = props => {
  const {location} = props
  return (
    <div className="container-fluid">
      <div>
        {/* <Breadcrumb crumbs={location.pathname.slice(1)}  /> */}
      </div>
      <DqDataTable
        title={"Order Table"}
        columns={columns}
        data={customData}
      />
    </div>
  )
}
export default withRouter(Order);

const columns = [
  { name: 'Name', selector: 'name' },
  { name: 'Profile', selector: 'imageUrl', cell: rowData => <div><img src={rowData.imageUrl} alt="pp" className="rounded" width={35} /></div> },
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
      <div className="bg-secondary p-1 rounded text-light" onClick={() => alert('you edit the table.')}><EditIcon /> </div>
      <div className=" bg-secondary p-1 mx-4 rounded text-light" data-toggle="modal" data-target="#deleteOrder">
        <DeleteIcon />
        <DqModal id={"deleteOrder"} text={"Are you sure to delete this order?"} title={"Delete Modal"} />
      </div>
    </div>
  },
]

const customData = [
  { imageUrl: ph1, name: 'lucy', phone: '0978987899', shopname: 'Baran', birthYear: 1987, customertype: 1, address: 'ygn' },
  { imageUrl: ph1, name: 'sumyat', phone: '0978987899', shopname: 'Baran', birthYear: 2017, customertype: 2, address: 'mdy' },
  { imageUrl: ph1, name: 'sumyat', phone: '0978987899', shopname: 'Baran', birthYear: 2017, customertype: 2, address: 'mdy' },
  { imageUrl: ph1, name: 'sumyat', phone: '0978987899', shopname: 'Baran', birthYear: 2017, customertype: 2, address: 'mdy' },
  { imageUrl: ph1, name: 'lucy', phone: '0978987899', shopname: 'Baran', birthYear: 1987, customertype: 1, address: 'ygn' },
  { imageUrl: ph1, name: 'lucy', phone: '0978987899', shopname: 'Baran', birthYear: 1987, customertype: 1, address: 'ygn' },
]