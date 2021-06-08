import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

/**
 * Компонент, который используется для переименования программы испытания
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ChangeNameProgram = props => {

    const [nameProgram, setNameProgram] = useState(props.program)

    const renameProgramHandler = () => {
        props.rename(nameProgram)
        props.closeHandler()
    }

    return (
        <div>
            <Dialog open={props.state} onClose={props.closeHandler} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <span>
                        Переименование программы испытания
                    </span>
                </DialogTitle>
                <DialogContent
                    style={{
                        width: '30vw'
                    }}
                >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="program_name"
                        label="Новое Название программы"
                        type="text"
                        onChange={event => setNameProgram(event.currentTarget.value)}
                        defaultValue={props.program}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => renameProgramHandler()} color="primary">
                        Изменить
                    </Button>
                    <Button onClick={props.closeHandler} color="primary">
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ChangeNameProgram