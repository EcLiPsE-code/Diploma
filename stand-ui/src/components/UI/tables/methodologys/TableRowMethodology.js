import React, {useEffect, useState} from 'react'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import {TableRow, TextField} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import EditIcon from '@material-ui/icons/Edit'

const UserTableRowMethodology = props => {

    const [nameMethodology, setNameMethodology] = useState(null)

    const {
        itemSelected,
        rowspan,
        click,
        id,
        save,
        cancel,
        edit
    } = props

    useEffect(() => {
        setNameMethodology(rowspan.name)
    }, [])

    return (
        <TableRow
            hover
            role="checkbox"
            aria-checked={itemSelected}
            tabIndex={-1}
            key={rowspan.name}
            selected={itemSelected}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    onClick={event => click(event, rowspan.id)}
                    checked={itemSelected}
                    inputProps={{ 'aria-labelledby': id }}
                />
            </TableCell>
            <TableCell align={'center'}>{rowspan.number}</TableCell>
            <TableCell
                align='center'
            >
                {
                    rowspan.edit?
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Методология"
                            type="text"
                            defaultValue={rowspan.name}
                            onChange={event => setNameMethodology(event.currentTarget.value)}
                            fullWidth
                        />
                        :
                        rowspan.name
                }
            </TableCell>
            <TableCell align='center'>
                {
                    rowspan.edit?
                        <div>
                            <IconButton>
                                <SaveIcon
                                    onClick={() => save({...rowspan, name: nameMethodology})}
                                />
                            </IconButton>
                            <IconButton>
                                <KeyboardBackspaceIcon
                                    onClick={() => cancel(rowspan.id)}
                                />
                            </IconButton>
                        </div>
                        :
                        <IconButton>
                            <EditIcon
                                onClick={() => edit(rowspan.id)}
                            />
                        </IconButton>
                }
            </TableCell>
        </TableRow>
    )
}

export default UserTableRowMethodology