import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

/**
 * Компонент, который формирует диалоговое окно
 * для регистрации пользователя в системе
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SignUp = props => {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={() => props.handleClickClose()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Зарегистрироваться</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Фамилия"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имя"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Отчество"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Телефон"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogContent>
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
                        Зарегистрироваться
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default SignUp