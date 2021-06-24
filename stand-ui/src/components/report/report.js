import React, {useState} from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {TableCell} from '@material-ui/core'
import TableBody from '@material-ui/core/TableBody'
import HeadProtocol from '../UI/tables/protocols/HeadProtocol'
import {getComparator, stableSort} from '../../helerps/sort/sort'
import UserTableRowProtocol from '../UI/tables/protocols/TableRowProtocol'
import TablePagination from '@material-ui/core/TablePagination'
import HeadReport from "../UI/tables/reports/HeadReport";
import TableRowReport from "../UI/tables/reports/TableRowReport";


const headCells = [
    {id: 'datetime', label: 'Дата и время'},
    {id: 'duration', label: 'Продолжительность'},
    {id: 'mileage', label: 'Пробег'},
    {id: 'speed', label: 'Скорость'},
    {id: 'dynamicR', label: 'Дин.радиус'},
    {id: 'temp', label: 't в камере'}
]

export const ReportTableTest = props => {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState('name')
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

    const handleChangeRowsPerPage = (event) => {
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
                minHeight: '65vh',
                maxHeight: '65vh'
            }}
        >
            <TableContainer>
                <Table
                    aria-labelledby="tableTitle"
                    size={'medium'}
                    aria-label="enhanced table"
                >
                    <HeadReport
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={props.rows.length}
                        cells={headCells}
                    />
                    <TableBody>
                        {stableSort(props.rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.id)
                                const labelId = `enhanced-table-checkbox-${index}`

                                return (
                                    <TableRowReport
                                        itemSelected={isItemSelected}
                                        rowspan={row}
                                        click={handleClick}
                                        id={labelId}
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
                count={props.rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}





export const ReportTest = props => {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Дата и время</TableCell>
                        <TableCell align="center">Длительность</TableCell>
                        <TableCell align="center">Пробег, км</TableCell>
                        <TableCell align="center">Скорость км/ч</TableCell>
                        <TableCell align="center">Дин. радиус, мм</TableCell>
                        <TableCell align="center">t в камере</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell align="center">{row.datetime}</TableCell>
                            <TableCell align="center">{row.duration}</TableCell>
                            <TableCell align="center">{row.mileage}</TableCell>
                            <TableCell align="center">{row.speed}</TableCell>
                            <TableCell align="center">{row.dynamicR}</TableCell>
                            <TableCell align="center">{row.temp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ReportTableTest