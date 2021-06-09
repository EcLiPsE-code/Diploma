import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'

const TableRowAccident = props => {

    return (
        <TableRow
            hover
            role="checkbox"
            aria-checked={props.itemSelected}
            tabIndex={-1}
            key={props.rowspan.name}
            selected={props.itemSelected}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    onClick={event => props.click(event, props.rowspan.number)}
                    checked={props.itemSelected}
                    inputProps={{ 'aria-labelledby': props.labId }}
                />
            </TableCell>
            <TableCell align='center'>{props.rowspan.number}</TableCell>
            <TableCell align='center'>{props.rowspan.position}</TableCell>
            <TableCell align='center'>{props.rowspan.type}</TableCell>
            <TableCell align='center'>{props.rowspan.time}</TableCell>
            <TableCell align='center'>{props.rowspan.description}</TableCell>
        </TableRow>
    )
}

export default TableRowAccident