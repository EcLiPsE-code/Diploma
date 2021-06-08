import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

/**
 * Компонент, который используется для создания новой программы испытания
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const NewProgram = props => {

    const [programName, setProgramName] = useState(null)

    const saveNewProgramHandler = () => {
        props.create(programName)
        props.closeHandler()
    }

    return (
        <div>
            <Dialog open={props.state} onClose={props.closeHandler} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <span>
                        Создание программы испытания
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
                        label="Название программы"
                        type="text"
                        defaultValue={programName}
                        onChange={event => setProgramName(event.currentTarget.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => saveNewProgramHandler()} color="primary">
                        Сохранить
                    </Button>
                    <Button onClick={props.closeHandler} color="primary">
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default NewProgram