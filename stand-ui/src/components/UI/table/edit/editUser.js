import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import {Button} from "@material-ui/core";

function createData(surname, name, lastName, phone, email, role, deleted) {
    return { surname, name, lastName, phone, email, role, deleted }
}

const rows = [
    createData('Солодков', 'Михаил', 'Анатольевич', '+375336825667',
        'mikhailsaladkou@gmail.com', 'Администратор', false),
    createData('Трофимов', 'Евгений', 'Владимирович', '+336729813',
        'evgen.trofimov@gmail.com', 'Сотрудник', false),
    createData('Мойсейков', 'Роман', 'Анатольевич', '+375339827834',
                'romanmoiseikov@gmail.com', 'Сотрудник', false),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    console.log('stabilizedThis', stabilizedThis)
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        console.log('a', a)
        console.log('b', b)
        console.log('order', order)
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0])
}

const headCells = [
    { id: 'surname', label: 'Фамилия', sorted: true},
    { id: 'name', label: 'Имя', sorted: true},
    { id: 'lastName', label: 'Отчество', sorted: true },
    { id: 'phone', label: 'Мобильный телефон', sorted: false },
    { id: 'email', label: 'Email', sorted: true },
    { id: 'role', label: 'Должность', sorted: true},
    { id: 'deleted', label: 'Работает/уволен', sorted: false},
    { id: 'button', label: '', sorted: false}
];

const EnhancedTableHead = props => {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    }

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        variant={'head'}
                        align={'center'}
                        padding={'none'}
                        sortDirection={orderBy === headCell.id ? order : false} //сортировка по данному столбцу
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const EnhancedTableToolbar = props => {
    const { numSelected } = props;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}
        >
            {
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {
                        numSelected > 0? <div style={{marginLeft: '2vmin'}}>Выбрано {numSelected} сотрудников</div>
                            :
                            <div style={{marginLeft: '2vmin'}}>Сотрудники</div>
                    }
                </div>
            }

            <div>
                <IconButton aria-label="filter list">
                    {
                        numSelected > 0? <DeleteIcon /> : <FilterListIcon/>
                    }
                </IconButton>
            </div>
        </div>
    );
};

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('surname');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

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

        setSelected(newSelected);
    };

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
                <EnhancedTableToolbar numSelected={selected.length} />
                <Table
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    aria-label="enhanced table"
                >
                    <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.name}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                onClick={event => handleClick(event, row.name)}
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </TableCell>
                                        <TableCell align={'center'}>{row.surname}</TableCell>
                                        <TableCell align='center'>{row.name}</TableCell>
                                        <TableCell align='center'>{row.lastName}</TableCell>
                                        <TableCell align='center'>{row.phone}</TableCell>
                                        <TableCell align='center'>{row.email}</TableCell>
                                        <TableCell align='center'>{row.role}</TableCell>
                                        <TableCell align='center'>{row.deleted ? 'Уволен' : 'Работает'}</TableCell>
                                        <TableCell align='center'>
                                            <Button
                                                onClick={() => alert('Редактировать')}
                                            >
                                                Редактировать
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
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
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}