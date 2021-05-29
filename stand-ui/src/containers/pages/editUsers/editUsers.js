import React from 'react'
import classes from './editUsers.module.css'
import EditUsersTable from "../../../components/UI/table/edit/editUser";

const EditUsers = props => {
    return (
        <div className={classes.EditUsersTableWrapper}>
            <EditUsersTable/>
        </div>
    )
}

export default EditUsers