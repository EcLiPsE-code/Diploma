import React, {useEffect} from 'react'
import classes from './typeTest.module.css'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import IconButton from '@material-ui/core/IconButton'

/**
 * Компонент, который необходим для выбора типа испытания
 * @param state
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
const TypeTest = ({state, onClick, setTypeTest}) => {

    const stl = {
        backgroundColor: '#fafafa',
        color: '#496949'
    }

    const setTypeTestHandler = typeTest => {
        setTypeTest(typeTest)
        onClick()
    }

    useEffect(() => {
        setTypeTestHandler('Динамическое')
    }, [])

    return (
        <div className={classes.TypeTest}>
            <div>
                <div className={classes.TypeTestLabel}>
                    Тип испытания:
                </div>
                <div
                    className={classes.BlockTypeTest}
                    onClick={() => setTypeTestHandler('Динамическое')}
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
                    onClick={() => setTypeTestHandler('КСК')}
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
            <div>
                <IconButton>
                    <RotateRightIcon
                        style={{
                            color: '#fff'
                        }}
                    />
                </IconButton>
            </div>
        </div>
    )
}

export default TypeTest