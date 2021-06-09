import React, {useCallback, useState} from 'react'
import classes from './css/test.module.css'
import TypeTest from './components/test/typeTest/typeTest'
import DataTest from './components/test/dataTest/dataTest'
import {connect} from 'react-redux'

/**
 * Компонент, который нужен для рендеринга формы, которая используется для
 * ввода данных на каждой позиции во время проведения испытания
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Test = props => {

    const [state, setState] = useState(false)

    const onClickHandler = useCallback(() => {
        setState(prev => !prev)
    }, [state])

    return (
        <div className={classes.Test}>
            <div className={classes.Title}>
                <TypeTest
                    state={state}
                    onClick={onClickHandler}
                    setTypeTest={props.setTypeTestHandler}
                />
            </div>
            <div className={classes.HeadData}>
                <DataTest
                    methodologys={props.methodologys}
                    protocols={props.protocols}
                    text={'Поз.1'}
                    keyPosition={'position1'}
                    setDataTestHandler={props.setDataTestHandler}
                />
            </div>
            <div className={classes.HeadData}>
                <DataTest
                    methodologys={props.methodologys}
                    protocols={props.protocols}
                    text={'Поз.2'}
                    state={state}
                    keyPosition={'position2'}
                    setDataTestHandler={props.setDataTestHandler}
                />
            </div>
        </div>
    )
}

export default Test