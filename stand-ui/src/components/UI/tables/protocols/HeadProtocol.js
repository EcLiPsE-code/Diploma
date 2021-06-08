import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import React from 'react'

const HeadProtocol = props => {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
        cells
    } = props

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
                {cells.map((headCell) => (
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
    )
}

export default HeadProtocol