import React, {useState} from 'react'
import TableCell from '@material-ui/core/TableCell'
import {TableRow, TextField} from '@material-ui/core'

const TableRowReport = props => {
    const {
        itemSelected,
        rowspan,
    } = props

    return (
        <TableRow
            hover
            role="checkbox"
            aria-checked={itemSelected}
            tabIndex={-1}
            key={rowspan.datetime}
            selected={itemSelected}
        >
            <TableCell align={'center'}>{rowspan.datetime}</TableCell>
            <TableCell align='center'>{rowspan.duration}</TableCell>
            <TableCell align='center'>{rowspan.mileage}</TableCell>
            <TableCell align='center'>{rowspan.speed}</TableCell>
            <TableCell align='center'>{rowspan.dynamicR}</TableCell>
            <TableCell align='center'>{rowspan.temp}</TableCell>
        </TableRow>
    )
}

export default TableRowReport