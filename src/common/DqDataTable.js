import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';

import DqInput from './DqInput'

const DqDataTable = props => {
    const { columns, data, AddNew, AddNewComponent, expand, ExpandComponent } = props

    const [filterText, setFilterText] = React.useState('');

    const getSubHeaderComponent = (AddNew) => {
        return (
            <div className="d-flex align-items-center pt-3" style={{ cursor: 'pointer' }} >
                {AddNew && <AddNewComponent />}
                <SearchComponent onFilter={e => setFilterText(e.target.value)} filterText={filterText} />
            </div>
        )
    }

    const tableData = data === undefined ? [] : data
    // const filteredItems = tableData.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

    const searchResult = tableData && tableData
        .filter((item) => item.name.toLowerCase().includes(filterText))
    // .map((element) => (element));

    return (
        <DataTable
            columns={columns}
            data={searchResult}
            keyField={"key"}
            customStyles={customStyles}
            striped={true}
            highlightOnHover={false}
            pointerOnHover={true}
            // selectableRows
            noHeader={true}
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
            theme="grey"
        />
    )
}
const SearchComponent = ({ filterText, onFilter, }) => (
    <div className="px-3">
        <DqInput id="search" placeholder="search" value={filterText} onChange={onFilter} style={{ width: 230 }} />
    </div>
);

export default DqDataTable;

const customStyles = {
    rows: {
        style: {
            minHeight: '75px',
        }
    },
    borderRadius: 6,
    whiteSpace: 'nowrap',
}
createTheme('grey', {
    background: {
        default: '#efefef'
    },
});
