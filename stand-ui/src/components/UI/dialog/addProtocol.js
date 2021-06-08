import React, {useState} from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, TextField
} from '@material-ui/core'

const AddProtocol = props => {

    const [name, setName] = useState(null)

    const addProtocolHandler = name => {
        props.addProtocol(name)
        props.close()
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.close}>
                <DialogTitle onClose={props.close}>
                    Добавление протокола
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Наименование протокола"
                        type="text"
                        onChange={event => setName(event.currentTarget.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => addProtocolHandler(name)} color='primary'>
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddProtocol