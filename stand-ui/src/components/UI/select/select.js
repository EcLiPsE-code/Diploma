import React from 'react'
import Auxiliary from "../../../hoc/auxiliary/auxiliary";
import {Select} from "@material-ui/core";
import classes from './userSelect.module.css'

const UserSelect = props => {

    return (
        <Auxiliary>
            <Select
                className={classes.Select}
                style={props.style}
                disabled={props.disabledType}
            >
            </Select>
        </Auxiliary>
    )
}

export default UserSelect