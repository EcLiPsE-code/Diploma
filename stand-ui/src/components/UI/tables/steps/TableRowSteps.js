import React, {useState} from 'react'
import TableCell from '@material-ui/core/TableCell'
import {TableRow, TextField} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const UserTableRowSteps = props => {

    const [pressure1, setPressure1] = useState(0)
    const [load1, setLoad1] = useState(0)
    const [duration, setDuration] = useState(null)
    const [speed, setSpeed] = useState(0)
    const [mileage, setMileage] = useState(0)
    const [pressure2, setPressure2] = useState(0)
    const [load2, setLoad2] = useState(0)

    const {
        itemSelected,
        rowspan,
        deleteStep,
        saveChangesStep,
        editDataStep,
        cancelChangesStep
    } = props

    const setTimeStep = time => {
        console.log(time)
        const [hours, minutes, seconds] = time.split(':')
        setDuration(`${hours}:${minutes}:${seconds}`)
    }

    return (
        <TableRow
            hover
            role="checkbox"
            aria-checked={itemSelected}
            tabIndex={-1}
            key={rowspan.name}
            selected={itemSelected}
        >
            <TableCell align={'center'}>{rowspan.numberStep}</TableCell>
            <TableCell align='center'>
                {
                    rowspan.edit?
                        <TextField
                            autoFocus
                            variant='outlined'
                            margin="dense"
                            id="name"
                            label="Давление П1, кПа"
                            type="text"
                            onChange={event => setPressure1(+event.currentTarget.value)}
                            defaultValue={rowspan.pressure1}
                        />
                        :
                        rowspan.pressure1
                }
            </TableCell>
            <TableCell align='center'>
                {
                    rowspan.edit?
                        <TextField
                            autoFocus
                            variant='outlined'
                            margin="dense"
                            id="name"
                            label="Нагрузка П1, Н"
                            type="text"
                            onChange={event => setLoad1(+event.currentTarget.value)}
                            defaultValue={rowspan.load1}
                        />
                        :
                        rowspan.load1
                }
            </TableCell>
            <TableCell align='center'>
                {
                    rowspan.edit?
                        <TextField
                            autoFocus
                            variant='outlined'
                            margin="dense"
                            id="name"
                            onChange={event => setTimeStep(event.currentTarget.value)}
                            defaultValue={rowspan.duration}
                        />
                        :
                        rowspan.duration
                }
            </TableCell>
            <TableCell align='center'>
                {
                    rowspan.edit?
                        <TextField
                            autoFocus
                            variant='outlined'
                            margin="dense"
                            id="name"
                            label="Скрость км/ч"
                            type="text"
                            onChange={event => setSpeed(+event.currentTarget.value)}
                            defaultValue={rowspan.speed}
                        />
                        :
                        rowspan.speed
                }
            </TableCell>
            <TableCell align='center'>
                {
                    rowspan.edit?
                        <TextField
                            autoFocus
                            variant='outlined'
                            margin="dense"
                            id="name"
                            label="Пробег, км"
                            type="text"
                            onChange={event => setMileage(+event.currentTarget.value)}
                            defaultValue={rowspan.mileage}
                        />
                        :
                        rowspan.mileage
                }
            </TableCell>
            <TableCell align='center'>
                {
                    rowspan.edit?
                        <TextField
                            autoFocus
                            variant='outlined'
                            margin="dense"
                            id="name"
                            label="Давление П2, кПа"
                            type="text"
                            disabled={props.typeTest === 'Динамическое'}
                            onChange={event => setPressure2(+event.currentTarget.value)}
                            defaultValue={rowspan.pressure2}
                        />
                        :
                        rowspan.pressure2
                }
            </TableCell>
            <TableCell align='center'>
                {
                    rowspan.edit?
                        <TextField
                            autoFocus
                            variant='outlined'
                            margin="dense"
                            id="name"
                            label="Нагрузка П2, Н"
                            type="text"
                            disabled={props.typeTest === 'Динамическое'}
                            onChange={event => setLoad2(+event.currentTarget.value)}
                            defaultValue={rowspan.load2}
                        />
                        :
                        rowspan.load2
                }
            </TableCell>
            <TableCell align='center'>
                {
                    !rowspan.edit?
                        <div>
                            <IconButton>
                                <EditIcon
                                    onClick={() => editDataStep(rowspan.numberStep)}
                                />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon
                                    onClick={() => deleteStep(rowspan.numberStep)}
                                />
                            </IconButton>
                        </div>
                        :
                        <div>
                            <IconButton>
                                <SaveIcon
                                    onClick={() => saveChangesStep({
                                        load1, load2, pressure2, pressure1,
                                        duration, speed, mileage, numberStep: rowspan.numberStep
                                    })}
                                />
                            </IconButton>
                            <IconButton>
                                <KeyboardBackspaceIcon
                                    onClick={() => cancelChangesStep(rowspan.numberStep)}
                                />
                            </IconButton>
                        </div>
                }
            </TableCell>
        </TableRow>
    )
}

export default UserTableRowSteps