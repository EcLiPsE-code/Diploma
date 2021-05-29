import React from 'react'
import classes from './editMethodologys.module.css'
import EditMethodologysTable from "../../../components/UI/table/edit/EditMethodologys";

const EditMethodology = props => {
    return (
        <div className={classes.EditMethodologysWrapper}>
            <EditMethodologysTable />
        </div>
    )
}

export default EditMethodology