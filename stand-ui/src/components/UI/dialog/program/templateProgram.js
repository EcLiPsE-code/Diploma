import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

/**
 * Компонент, который используется для сохранения шаблона программы испытания в БД
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const TemplateProgram = props => {
    return (
        <div>
            <Dialog open={props.state} onClose={props.closeHandler} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <span>
                        Добавить шаблон программы
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
                        label="Название шаблона"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeHandler} color="primary">
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

export default TemplateProgram