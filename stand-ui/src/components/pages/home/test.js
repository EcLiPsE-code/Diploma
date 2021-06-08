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
                />
            </div>
            <div className={classes.HeadData}>
                <DataTest
                    text={'Поз.1'}
                />
            </div>
            <div className={classes.HeadData}>
                <DataTest
                    text={'Поз.2'}
                    state={state}
                />
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        tester: state.testReducer.tester,
        position1: {
            protocol: state.testReducer.protocol,
            model: state.testReducer.model,
            size: state.testReducer.size,
            number: state.testReducer.number,
            rDin: state.testReducer.rDin,
            method: state.testReducer.method
        },
        position2: {
            protocol: state.testReducer.protocol,
            model: state.testReducer.model,
            size: state.testReducer.size,
            number: state.testReducer.number,
            rDin: state.testReducer.rDin,
            method: state.testReducer.method
        }
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)