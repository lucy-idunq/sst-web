import React, { useState } from 'react';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

// import { IMG_SERVER } from '../../network/api.config'
import DqDataTable from '../../common/DqDataTable'
import DqModal from '../../common/DqModal'
import DqButton from '../../common/DqButton'
import ph1 from '../../upload/luvph.jpg'
import ItemAddEdit from './ItemAddEdit'

const Items = props => {
    // const { history } = props

    const [isEdit, setIsEdit] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const [isMain, setIsMain] = useState(true)
    const [editRowData, setEditRowData] = useState([])

    const [name, setName] = useState('')

    const onAddClick = () => {
        setIsMain(false)
        setIsAdd(true)
    }
    const onEditClick = (row) => {
        setIsMain(false)
        setIsEdit(true)
        setEditRowData(row)
    }
   
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
                <div className="bg-secondary p-1 rounded text-light" onClick={() => onEditClick(row)}><EditIcon /> </div>
                <div className=" bg-secondary p-1 mx-4 rounded text-light" data-toggle="modal" data-target="#deleteItem">
                    <DeleteIcon />
                    <DqModal id={"deleteItem"} text={"Are you sure to delete this item?"} title={"Delete Modal"} />
                </div>
            </div>
        },
    ]

    const AddNewComponent = () => (
        <div className="p-2 rounded text-light" >
            {/* <DqLink to="/item" text={<PlaylistAddIcon />} /> */}
            <DqButton text={<PlaylistAddIcon />} onClick={onAddClick} />
        </div>
    )


    return (
        <div>
            {
                isMain ?
                    <DqDataTable
                        columns={columns}
                        data={customData}
                        AddNew
                        AddNewComponent={AddNewComponent}
                    />
                    :
                    <ItemAddEdit
                        row={editRowData}
                        setIsEdit={setIsEdit}
                        setIsAdd={setIsAdd}
                        setIsMain={setIsMain}
                        isAdd={isAdd}
                        isEdit={isEdit}
                        isMain={isMain}

                        name={name}
                        setName={setName}
                    />
            }






        </div>
    )
}

export default Items;


const customData = [
    { name: 'Mehmet', packageType: 2, imageUrl: `${ph1}`, price: 1987, summary: 'blah..blah..blah..blah...1', edit: 'Edit', delete: 'Delete' },
    { name: 'Zerya Betül', packageType: 2, imageUrl: `${ph1}`, price: 2017, summary: 'blah..blah..blah..blah...2', edit: 'Edit', delete: 'Delete' },
    { name: 'Zerya Betül', packageType: 2, imageUrl: `${ph1}`, price: 2017, summary: 'blah..blah..blah..blah...2', edit: 'Edit', delete: 'Delete' },
    { name: 'Mehmet', packageType: 2, imageUrl: `${ph1}`, price: 1987, summary: 'blah..blah..blah..blah...1', edit: 'Edit', delete: 'Delete' },
    { name: 'Mehmet', packageType: 2, imageUrl: `${ph1}`, price: 1987, summary: 'blah..blah..blah..blah...1', edit: 'Edit', delete: 'Delete' },
    { name: 'Zerya Betül', packageType: 2, imageUrl: `${ph1}`, price: 2017, summary: 'blah..blah..blah..blah...2', edit: 'Edit', delete: 'Delete' },
]

