import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

const columns = [
    {id: 'stage', label: 'Этап', align: 'center'},
    {id: 'pressure1', label: 'Давление П1, кПа', align: 'center'},
    {id: 'strain1', label: 'Нагрузка П1, Н', align: 'center'},
    {id: 'duration', label: 'Длительность', align: 'center'},
    {id: 'speed', label: 'Скорость, км/ч', align: 'center'},
    {id: 'mileage', label: 'Пробег, км', align: 'center'},
    {id: 'pressure2', label: 'Давление П2, кПа', align: 'center'},
    {id: 'strain2', label: 'Нагрузка П2, Н', align: 'center'},
]


const ProgramTable = props => {

    const [data, setData] = useState([])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if (data){
       data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => {
           return (
               <TableRow hover role='checkbox' tabIndex={-1} key={item.id}>
                   {
                       columns.map(column => {
                           const value = item[column.id]
                           return (
                               <TableCell key={column.id} align={column.align}>
                                    value
                               </TableCell>
                           )
                       })
                   }
               </TableRow>
           )
       })
    }

    return (
        <Paper style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%'
        }}>
            <div>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
        </Paper>
    )
}

export default ProgramTable