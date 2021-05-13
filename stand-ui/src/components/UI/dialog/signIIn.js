import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const FormDialog = props => {
    return (
        <div>
            <Dialog open={props.open} onClose={() => props.handleClickClose()} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Вход</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Логин
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogContent>
                    <DialogContentText>
                        Пароль
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.handleClickClose()} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={() => props.handleClickClose()} color="primary">
                        Войти
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog