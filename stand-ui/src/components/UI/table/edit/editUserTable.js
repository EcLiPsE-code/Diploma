import React, {useState} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import EmployeesTableToolbar from '../../tables/users/ToolbarUser'
import EmployeesTableHead from '../../tables/users/HeadUser'
import {getComparator, stableSort} from '../../../../helerps/sort/sort'
import TableRowUser from '../../tables/users/TableRowUser'
import AddUserDialog from '../../dialog/addUser'
import Auxiliary from "../../../../hoc/auxiliary/auxiliary"

const headCells = [
    { id: 'surname', label: 'Фамилия'},
    { id: 'name', label: 'Имя'},
    { id: 'lastName', label: 'Отчество'},
    { id: 'phone', label: 'Мобильный телефон'},
    { id: 'email', label: 'Email'},
    { id: 'role', label: 'Должность'},
    { id: 'deleted', label: 'Работает/уволен'},
    { id: 'button', label: ''}
]

const EmployeesTable = props => {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState('surname')
    const [selected, setSelected] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [openDialog, setOpenDialog] = useState(false)

    const handleOpen = () => {
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = props.employees.map(n => n.id)
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
        <Auxiliary>
            <AddUserDialog
                open={openDialog}
                handleClickClose={handleClose}
                addUserHandler={props.addUser}
            />
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
                    <EmployeesTableToolbar
                        numSelected={selected}
                        openDialogHandler={handleOpen}
                        deleteUsersHandler={props.deleteUsers}
                    />
                    <Table
                        aria-labelledby="tableTitle"
                        size={'small'}
                        aria-label="enhanced table"
                    >
                        <EmployeesTableHead
                            numSelected={selected}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={props.employees.length}
                            headCells={headCells}
                        />
                        <TableBody>
                            {stableSort(props.employees, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id)
                                    const labelId = `enhanced-table-checkbox-${index}`

                                    return <TableRowUser
                                        itemSelected={isItemSelected}
                                        labId={labelId}
                                        click={handleClick}
                                        rowspan={row}
                                        fireEmployeeHandler={props.fireEmployee}
                                        changeRole={props.changeRoleHandler}
                                    />
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
                    count={props.employees.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </Auxiliary>
    )
}

export default EmployeesTable