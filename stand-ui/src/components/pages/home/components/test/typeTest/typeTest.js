import React from 'react'
import classes from './typeTest.module.css'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

/**
 * Компонент, который необходим для выбора типа испытания
 * @param state
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
const TypeTest = ({state, onClick}) => {

    const stl = {
        backgroundColor: '#fafafa',
        color: '#496949'
    }

    return (
        <div className={classes.TypeTest}>
            <div className={classes.TypeTestLabel}>
                Тип испытания:
            </div>
            <div
                className={classes.BlockTypeTest}
                onClick={() => onClick()}
                style={state? stl : null}
            >
                <div>
                     <ErrorOutlineIcon/>
                </div>
                <div>
                    Динамическое
                </div>
            </div>
            <div
                className={classes.BlockTypeTest}
                onClick={() => onClick()}
                style={state? null : stl}
            >
                <div>
                     <ErrorOutlineIcon/>
                </div>
                <div>
                    КСК
                </div>
            </div>
        </div>
    )
}

export default TypeTest