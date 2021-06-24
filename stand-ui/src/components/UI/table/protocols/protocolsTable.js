import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'

/**
 * Возращает наибольшее или наименьшее значение
 * @param a
 * @param b
 * @param orderBy
 * @returns {number}
 */
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

/**
 * Возврашает как будут сортироваться значения (возрастание, убывание)
 * @param order
 * @param orderBy
 * @returns {{(*=, *=): number, (*=, *=): number}}
 */
function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0])
}

const headCells = [
    {id: 'program', label: 'Программа', align: 'center', sorted: true},
    {id: 'testType', label: 'Тип испытания', align: 'center', sorted: true},
    {id: 'data', label: 'Дата проведения испытания', align: 'center', sorted: true},
];

/**
 * Шапка таблицы
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ProtocolsTableHead = props => {
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

const ProtocolsTableToolbar = props => {
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
                        numSelected > 0? <div style={{marginLeft: '2vmin'}}>Выбрано {numSelected} программ</div>
                            :
                            <div style={{marginLeft: '2vmin'}}>Программы</div>
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

const ProtocolsTable = props => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('surname');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = props.protocols.map(n => n.name);
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

        setSelected(newSelected)
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
                minHeight: '58vh',
                maxHeight: '58vh'
            }}
        >
            <TableContainer>
                <ProtocolsTableToolbar numSelected={selected.length} />
                <Table
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    aria-label="enhanced table"
                    stickyHeader
                >
                    <ProtocolsTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={props.protocols.length}
                    />
                    <TableBody>
                        {
                            stableSort(props.protocols, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                            onClick={() => props.clickRow()}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    onClick={event => handleClick(event, row.name)}
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell align='center'>{row.name}</TableCell>
                                            <TableCell align='center'>{row.typeTest}</TableCell>
                                            <TableCell align='center'>{row.date}</TableCell>
                                        </TableRow>
                                    );
                                })
                        }
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
    )
}

export default ProtocolsTable