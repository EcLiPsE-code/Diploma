import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

/**
 * Компонент, который нужен для формирования формы
 * авторизации в системе
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const SignIn = props => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const signIn = () => {
        props.signInHandler(email, password)
        props.handleClickClose()
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={() => props.handleClickClose()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Вход</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                        onChange={event => setEmail(event.currentTarget.value)}
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
                        onChange={event => setPassword(event.currentTarget.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.handleClickClose()} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={() => signIn()} color="primary">
                        Войти
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default SignIn