import React, {useState} from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, TextField
} from '@material-ui/core'

const AddMethodology = props => {

    const [name, setName] = useState(null)

    const addMethodologyHandler = name => {
        props.addMethodology(name)
        props.close()
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.close}>
                <DialogTitle onClose={props.close}>
                    Добавление методологии
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Наименование методологии"
                        type="text"
                        onChange={event => setName(event.currentTarget.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => addMethodologyHandler(name)} color='primary'>
                        Добавить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddMethodology