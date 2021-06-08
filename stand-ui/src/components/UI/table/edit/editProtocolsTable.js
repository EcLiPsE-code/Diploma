import React, {useState} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import {getComparator, stableSort} from '../../../../helerps/sort/sort'
import ToolbarProtocol from '../../tables/protocols/ToolbarProtocol'
import HeadProtocol from '../../tables/protocols/HeadProtocol'
import UserTableRowProtocol from '../../tables/protocols/TableRowProtocol'

const headCells = [
    { id: 'number', label: 'Номер'},
    { id: 'name', label: 'Наименование протокола'},
    { id: 'button', label: ''}
]

const EditProtocolsTable = props => {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState('surname')
    const [selected, setSelected] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            setSelected(props.protocols.map(item => item.id))
        }
        else{
            setSelected([])
        }
    }

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    return (
        <Paper
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-between',
                minHeight: '70vh',
                maxHeight: '70vh'
            }}
        >
            <TableContainer>
                <ToolbarProtocol
                    numSelected={selected}
                    name={'Протоколы'}
                    addAction={props.addProtocol}
                    deleteAction={props.deleteProtocols}
                />
                <Table
                    aria-labelledby="tableTitle"
                    size={'small'}
                    aria-label="enhanced table"
                >
                    <HeadProtocol
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={props.protocols.length}
                        cells={headCells}
                    />
                    <TableBody>
                        {stableSort(props.protocols, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <UserTableRowProtocol
                                        itemSelected={isItemSelected}
                                        rowspan={row}
                                        click={handleClick}
                                        id={labelId}
                                        save={props.saveChanges}
                                        cancel={props.cancelChanges}
                                        edit={props.editProtocol}
                                    />
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                style={{
                    minHeight: '7vh'
                }}
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={props.protocols.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default EditProtocolsTable