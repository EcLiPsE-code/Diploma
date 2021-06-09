import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import React from 'react'

const AccidentsTableToolbar = props => {
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
                        numSelected > 0? <div style={{marginLeft: '2vmin'}}>Выбрано {numSelected} аварий</div>
                            :
                            <div style={{marginLeft: '2vmin'}}>Аварии</div>
                    }
                </div>
            }

            <div>
                <IconButton aria-label="filter list">
                    {
                        numSelected > 0? <DeleteIcon /> : <FilterListIcon/>
                    }
                </IconButton>
            </div>
        </div>
    )
}

export default AccidentsTableToolbar