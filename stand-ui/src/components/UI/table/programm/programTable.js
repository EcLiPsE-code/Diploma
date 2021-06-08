import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import {getComparator, stableSort} from '../../../../helerps/sort/sort'
import HeadSteps from '../../tables/steps/HeadSteps'
import TableRowSteps from '../../tables/steps/TableRowSteps'

const headCells = [
    {id: 'stage', label: 'Этап', align: 'center'},
    {id: 'pressure1', label: 'Давление П1, кПа', align: 'center'},
    {id: 'strain1', label: 'Нагрузка П1, Н', align: 'center'},
    {id: 'duration', label: 'Длительность', align: 'center'},
    {id: 'speed', label: 'Скорость, км/ч', align: 'center'},
    {id: 'mileage', label: 'Пробег, км', align: 'center'},
    {id: 'pressure2', label: 'Давление П2, кПа', align: 'center'},
    {id: 'strain2', label: 'Нагрузка П2, Н', align: 'center'},
    {id: 'btns', label: '', align: 'center'}
]

/**
 * Компонент, который используется для создания таблицы,
 * которая используется для добавления этапов программы
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ProgramTable = props => {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState(null)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <Paper
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-between',
                minHeight: '40vh',
                maxHeight: '40vh'
            }}
        >
            <TableContainer>
                <Table
                    aria-labelledby="tableTitle"
                    size={'small'}
                    aria-label="enhanced table"
                >
                    <HeadSteps
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={props.stepsProgram.length}
                        cells={headCells}
                    />
                    <TableBody>
                        {
                            stableSort(props.stepsProgram, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {

                                    return (
                                        <TableRowSteps
                                            rowspan={row}
                                            typeTest={props.typeTest}
                                            deleteStep={props.deleteStepHandler}
                                            saveChangesStep={props.saveChangesStepHandler}
                                            editDataStep={props.editDataStepHandler}
                                            cancelChangesStep={props.cancelChangesStepHandler}
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
                count={props.stepsProgram.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default ProgramTable