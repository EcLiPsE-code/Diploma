import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'

const EmployeesTableToolbar = props => {
    const { numSelected } = props

    return (
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
                        numSelected.length > 0? <div style={{marginLeft: '2vmin'}}>Выбрано {numSelected.length} сотрудников</div>
                            :
                            <div style={{marginLeft: '2vmin'}}>Сотрудники</div>
                    }
                </div>
            }

            <div>
                {
                    numSelected.length > 0?
                        <IconButton>
                            <DeleteIcon
                                onClick={() => props.deleteUsersHandler(numSelected)}
                            />
                        </IconButton>
                        :
                        <div>
                            <IconButton>
                                <AddIcon
                                    onClick={() => props.openDialogHandler()}
                                />
                            </IconButton>
                            <IconButton>
                                <FilterListIcon />
                            </IconButton>
                        </div>
                }
            </div>
        </div>
    )
}

export default EmployeesTableToolbar