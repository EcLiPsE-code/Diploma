import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import React from 'react'

const HeadSteps = props => {
    const {
        order,
        orderBy,
        onRequestSort,
        cells
    } = props

    const createSortHandler = property => event => {
        onRequestSort(event, property);
    }

    return (
        <TableHead
            style={{
                height: '7vh'
            }}
        >
            <TableRow>
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

export default HeadSteps