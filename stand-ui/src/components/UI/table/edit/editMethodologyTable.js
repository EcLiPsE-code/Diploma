import React, {useState} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import {getComparator, stableSort} from '../../../../helerps/sort/sort'
import ToolbarMethodology from '../../tables/methodologys/ToolbarMethodologys'
import HeadMethodology from '../../tables/methodologys/HeadMethodology'
import UserTableRowMethodology from '../../tables/methodologys/TableRowMethodology'

const headCells = [
    { id: 'number', label: 'Номер'},
    { id: 'name', label: 'Наименование методологии'},
    { id: 'button', label: ''}
]

const EditMethodologysTable = props => {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState(null)
    const [selected, setSelected] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    };

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            setSelected(props.methodologys.map(item => item.id))
        }
        else{
            setSelected([])
        }
    }

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            )
        }

        setSelected(newSelected)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

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
                <ToolbarMethodology
                    numSelected={selected}
                    name={'Методологии'}
                    addMethodologyAction={props.addMethodology}
                    deleteMethodologysAction={props.deleteMethodologys}
                />
                <Table
                    aria-labelledby="tableTitle"
                    size={'small'}
                    aria-label="enhanced table"
                >
                    <HeadMethodology
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={props.methodologys.length}
                        cells={headCells}
                    />
                    <TableBody>
                        {
                            stableSort(props.methodologys, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.name)
                                const labelId = `enhanced-table-checkbox-${index}`

                                return (
                                    <UserTableRowMethodology
                                        itemSelected={isItemSelected}
                                        rowspan={row}
                                        click={handleClick}
                                        id={labelId}
                                        save={props.saveChanges}
                                        cancel={props.cancelChanges}
                                        edit={props.editMethodology}
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
                count={props.methodologys.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default EditMethodologysTable