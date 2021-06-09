import React from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import {getComparator, stableSort} from '../../../../helerps/sort/sort'
import AccidentsTableHead from '../../tables/accidents/HeadAccident'
import TableRowAccident from '../../tables/accidents/TableRowAccident'
import AccidentsTableToolbar from '../../tables/accidents/ToolbarAccident'

const headCells = [
    {id: 'number', label: '№', align: 'center'},
    {id: 'position', label: 'Позиция', align: 'center'},
    {id: 'type', label: 'Тип', align: 'center'},
    {id: 'datetime', label: 'Время', align: 'center'},
    {id: 'description', label: 'Описание', align: 'center'}
]

const AccidentsTable = props => {
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('number')
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = props.accidents.map(n => n.number)
            setSelected(newSelecteds)
            return
        }
        setSelected([])
    }

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected = []

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

    const isSelected = name => selected.indexOf(name) !== -1

    return (
        <Paper
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-between',
                minHeight: '56vh',
                maxHeight: '56vh'
            }}
        >
            <TableContainer>
                <AccidentsTableToolbar numSelected={selected.length} />
                <Table
                    aria-labelledby="tableTitle"
                    size={'small'}
                    aria-label="enhanced table"
                    stickyHeader
                >
                    <AccidentsTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={props.accidents.length}
                        headCells={headCells}
                    />
                    <TableBody>
                        {stableSort(props.accidents, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.number)
                                const labelId = `enhanced-table-checkbox-${index}`

                                return (
                                    <TableRowAccident
                                        itemSelected={isItemSelected}
                                        rowspan={row}
                                        click={handleClick}
                                        labId={labelId}
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
                count={props.accidents.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default AccidentsTable