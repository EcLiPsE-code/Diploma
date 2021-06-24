import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import {Button, IconButton, Tooltip} from '@material-ui/core'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import AutorenewIcon from '@material-ui/icons/Autorenew'

const EmployeeTableRow = props => {

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
                    onClick={event => props.click(event, props.rowspan.id)}
                    checked={props.itemSelected}
                    inputProps={{ 'aria-labelledby': props.labId }}
                />
            </TableCell>
            <TableCell align={'center'}>{props.rowspan.surname}</TableCell>
            <TableCell align='center'>{props.rowspan.name}</TableCell>
            <TableCell align='center'>{props.rowspan.lastName}</TableCell>
            <TableCell align='center'>{props.rowspan.phone}</TableCell>
            <TableCell align='center'>{props.rowspan.email}</TableCell>
            <TableCell align='center'>{props.rowspan.position}</TableCell>
            <TableCell align='center'>{props.rowspan.deleted ? 'Уволен' : 'Работает'}</TableCell>
            <TableCell align='center'>
                <IconButton onClick={() => props.fireEmployeeHandler(props.rowspan)}>
                    {props.rowspan.deleted?
                        <Tooltip title={'Вернуть на работу'}>
                            <ThumbUpIcon/>
                        </Tooltip>
                        :
                        <Tooltip title={'Уволить'}>
                            <ThumbDownIcon/>
                        </Tooltip>
                    }
                </IconButton>
                <IconButton onCLick={() => props.changeRole(props.rowspan)}>
                    <Tooltip title={'Сменить роль'}>
                        <AutorenewIcon/>
                    </Tooltip>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

export default EmployeeTableRow