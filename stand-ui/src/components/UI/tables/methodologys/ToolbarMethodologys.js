import React, {useState} from 'react'
import Auxiliary from '../../../../hoc/auxiliary/auxiliary'
import AddMethodology from '../../dialog/addMethodology'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'

const ToolbarMethodology = props => {
    const [open, setOpen] = useState(false)
    let {
        numSelected,
        name,
        addMethodologyAction,
        deleteMethodologysAction
    } = props

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteMethodologysHandler = count => {
        deleteMethodologysAction(count)
    }

    return (
        <Auxiliary>
            <AddMethodology
                open={open}
                clickOpen={handleClickOpen}
                close={handleClose}
                addMethodology={addMethodologyAction}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                {
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {
                            numSelected.length > 0? <div style={{marginLeft: '2vmin'}}>Выбрано {numSelected.length} {name}</div>
                                :
                                <div style={{marginLeft: '2vmin'}}>{name}</div>
                        }
                    </div>
                }

                <div>
                    <IconButton aria-label='filter list'>
                        <AddIcon onClick={() => handleClickOpen()} />
                    </IconButton>
                    <IconButton aria-label='filter list'>
                        {
                            numSelected.length > 0?
                                <DeleteIcon
                                    onClick={() => deleteMethodologysHandler(numSelected)}
                                />
                                :
                                <FilterListIcon/>
                        }
                    </IconButton>
                </div>
            </div>
        </Auxiliary>
    )
}

export default ToolbarMethodology