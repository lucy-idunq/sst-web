import React from 'react'
import ph1 from '../../upload/luvph.jpg'
import DqTable from '../../common/DqTable'

const Order = props => {
    return (
        <div>
            <DqTable columns={columns} customData={customData} title={"Orders Table"} />
        </div>
    )
}
export default Order;

const columns = [
    { title: 'Profile', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/> , filtering: false},
    { title: 'Name', field: 'name' },
    { title: 'Phone-no', field: 'phoneno', initialEditValue: '-' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Customer Type',
      field: 'customertype',
      lookup: { 1: 'Wholesale', 2: 'Retailer' },
    },
    { title: 'Address', field: 'address' },
    { title: 'Shop Name', field: 'shopname' },
  ]
  const customData = [
    {  imageUrl: ph1 ,name: 'lucy', phone: '0978987899', shopname: 'Baran', birthYear: 1987, customertype: 1, address: 'ygn' },
    { imageUrl: ph1 , name: 'sumyat', phone: '0978987899', shopname: 'Baran', birthYear: 2017, customertype: 2, address: 'mdy' },
  ]