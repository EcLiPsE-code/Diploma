import React from 'react'
import classes from './typeTest.module.css'
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const TypeTest = props => {

    return (
        <div className={classes.TypeTest}>
            <div className={classes.TypeTestLabel}>
                Тип испытания:
            </div>
            <div className={classes.BlockTypeTest}>
                <span>
                     <ErrorOutlineIcon/>
                </span>
                <span>
                    Динамическое
                </span>
            </div>
            <div className={classes.BlockTypeTest}>
                <span>
                     <ErrorOutlineIcon/>
                </span>
                <span>
                    КСК
                </span>
            </div>
        </div>
    )
}

export default TypeTest