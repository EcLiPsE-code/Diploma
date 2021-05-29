import React from 'react'
import classes from './editProtocols.module.css'
import EditProtocolsTable from "../../../components/UI/table/edit/editProtocols";

const EditProtocols = props => {
    return (
        <div className={classes.EditProtocolsWrapper}>
            <EditProtocolsTable />
        </div>
    )
}

export default EditProtocols