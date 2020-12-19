import React,{useState} from 'react'
import DataTable from 'react-data-table-component';

import DqInput from './DqInput'
 import '../App.css'

const DqDataTable = props => {
    const { title, columns, data, AddNew, AddNewComponent, expand, ExpandComponent } = props

    // const [filterText, setFilterText] = React.useState('');
    // const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

    const customStyles = {
        rows: {
            style: {
                minHeight: '75px',
            }
        },
        cell: {
            style: { backgroundColor: '#E8F5F5', }
        },

        borderRadius: 6,
        whiteSpace: 'nowrap',

    }

    const getSubHeaderComponent = (AddNew) => {
        return (
            <div className="d-flex align-items-center" style={{ cursor: 'pointer' }} >
                {AddNew && <AddNewComponent />}
                <SearchComponent />
            </div>
        )
    }
    const SearchComponent = ({ filterText, onFilter, onClear }) => (
        <div className="px-3">
            <DqInput id="search" placeholder="search" style={{ width: 250 }} />
        </div>
    );

    const tableData = data === undefined ? [] : data;

    return (
        <DataTable
            title={title}
            columns={columns}
            data={tableData}
            keyField={"key"}
            customStyles={customStyles}
            striped={false}
            highlightOnHover={true}
            pointerOnHover={true}
            // selectableRows
            subHeader={true}
            subHeaderComponent={getSubHeaderComponent(AddNew)}
            fixedHeader={true}
            persistTableHead
            subHeaderWrap
            expandableRows={expand ? true : false}
            expandableRowsComponent={expand && <ExpandComponent />}
            expandOnRowClicked={true}
            pagination={true}
            paginationTotalRows={tableData.length}
            paginationDefaultPage={1}
            paginationPerPage={10}
            theme={'dark'}
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