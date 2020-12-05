import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import MaterialTable from 'material-table'

const Table = props => {
    const { title, columns, customData, to, history } = props

    const tableRef = React.createRef();
    const [data, setData] = useState([...customData])
    const [selectedRow, setSelectedRow] = useState(null)

    const addNewTableData = (newData) => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                setData([...data, newData]);
                resolve();
            }, 1000)
        })
    }

    return (
        <div style={{ width: "100%" }}>
            <MaterialTable
                title={title}
                columns={columns}
                data={data}
                tableRef={tableRef}
                options={{
                    exportButton: true,
                    filtering: false,
                    isLoading: true,
                    selection: false,
                    actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: '#adb5bd',
                        color: '#FFF'
                    },
                    rowStyle: rowData => ({
                        backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                    })
                }}
                detailPanel={rowData => {
                    return (
                        <h4>hello,{rowData.name}</h4>
                    )
                }}
                onRowClick={(event, rowData, togglePanel) => togglePanel()}
                // onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}

                localization={{
                    header: {
                        actions: 'Actions'
                    },
                }}

                // actions={[
                //     {
                //         icon: 'add',
                //         tooltip: 'Add User',
                //         isFreeAction: true,
                //         onClick: (props) => history.replace(to)
                //     },
                //     {
                //         icon: 'edit',
                //         onClick: () => history.push(to)
                //     },
                //     {
                //         icon: 'delete',
                //         onClick: (rowData) => alert((rowData),null,2 )
                //     }
                // ]}
            //  actions={[
            // {
            //   icon: 'save',
            //   tooltip: 'Save User',
            //   onClick: (event, rowData) => alert("You saved " + rowData.name)
            // },

            //   ]}
            // editable={{
            // onRowAdd: (newData) => {
            //     addNewTableData(newData)
            // },
            // onRowUpdate: (newData, oldData) =>
            //     new Promise((resolve, reject) => {
            //         setTimeout(() => {
            //             const dataUpdate = [...data];
            //             const index = oldData.tableData.id;
            //             dataUpdate[index] = newData;
            //             setData([...dataUpdate]);
            //             resolve();
            //         }, 1000)
            //     }),
            // onRowDelete: oldData =>
            //     new Promise((resolve, reject) => {
            //         setTimeout(() => {
            //             const dataDelete = [...data];
            //             const index = oldData.tableData.id;
            //             dataDelete.splice(index, 1);
            //             setData([...dataDelete]);
            //             resolve()
            //         }, 1000)
            //     }),
            // }}
            />
        </div>

    )
}
export default withRouter(Table);