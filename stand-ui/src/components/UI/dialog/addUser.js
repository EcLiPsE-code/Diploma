import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import UserSelect from "../select/select";

/**
 * Компонент, который формирует диалоговое окно
 * для регистрации пользователя в системе
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const AddUserDialog = props => {

    const [user, setUser] = useState({
        deleted: false,
        email: null,
        lastName: null,
        name: null,
        phone: null,
        position: null,
        surname: null,
        password: null
    })

    const addUser = employee => {
        props.addUserHandler(employee)
        props.handleClickClose()
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={() => props.handleClickClose()}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Сотрудник</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Фамилия"
                        type="text"
                        fullWidth
                        onChange={event => setUser({
                            ...user,
                            surname: event.currentTarget.value
                        })}
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
                        onChange={event => setUser({
                            ...user,
                            name: event.currentTarget.value
                        })}
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
                        onChange={event => setUser({
                            ...user,
                            lastName: event.currentTarget.value
                        })}
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
                        onChange={event => setUser({
                            ...user,
                            phone: event.currentTarget.value
                        })}
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
                        onChange={event => setUser({
                            ...user,
                            email: event.currentTarget.value
                        })}
                    />
                </DialogContent>
                <DialogContent>
                    <UserSelect
                        arr={[{name: 'Сотрудник'}, {name: 'Администратор'}]}
                        title={'Должность'}
                        style={{
                            width: '15vw',
                        }}
                        changed={pos => setUser({
                            ...user,
                            position: pos
                        })}
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
                        onChange={event => setUser({
                            ...user,
                            password: event.currentTarget.value
                        })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.handleClickClose()} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={() => addUser(user)} color="primary">
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddUserDialog