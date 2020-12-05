import React from 'react'
import DataTable from 'react-data-table-component';
import styled from  'styled-components'

import DqButton from './DqButton'

const DqDataTable = props => {
    const {title,columns,data} = props

    return (
            <DataTable
            title={title}
            columns={columns}
            data={data}
            keyField={"key"}
            striped={true}
            highlightOnHover={true}
            pointerOnHover={true}
            pagination={true}
            paginationTotalRows={data.length}
            paginationDefaultPage={1}
            paginationPerPage={10}
            style={{ borderRadius: 6, whiteSpace: 'nowrap' }}
            />
        
    )
}
export default DqDataTable;


// const data = [
//     { id: 1, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',  year: '1982',edit: "EDIT", export: " EXPORT", remove: "REMOVE" },
//     { id: 2, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',  year: '1982',edit: "EDIT", export: " EXPORT", remove: "REMOVE" } ,
//     { id: 3, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',  year: '1982',edit: "EDIT", export: " EXPORT", remove: "REMOVE" } ,
//     { id: 4, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',  year: '1982',edit: "EDIT", export: " EXPORT", remove: "REMOVE" } ,
//     { id: 5, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...',  year: '1982',edit: "EDIT", export: " EXPORT", remove: "REMOVE" }  
// ];
// const columns = [
//   {
//     name: 'Title',
//     sortable: true,
//     grow:4,
//     cell: row => <div data-tag="allowRowEvents"><div style={{ fontWeight: 'bold' }}>{row.title}</div>{row.summary}</div>,
//   },
//   {
//     name: 'Year',
//     selector: 'year',
//     sortable: true,
//     right: true,
//     cell: row => <div className="d-flex justify-content-center align-items-center">
//     <div className=" p-2 text-center  bg-transparent ">{"hello -parent"}</div>
//     <div className="px-2 ">{"hi"} </div>
// </div>

//   },
// {
//     name: '',
//     selector: 'edit',
//     cell: row => <div style={{ color: '#0B3D92' }}><EditIcon/> {row.edit}</div>

// },
// ];