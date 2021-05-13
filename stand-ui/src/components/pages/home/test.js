import React, {useCallback, useState} from 'react'
import classes from './css/test.module.css'
import Tester from './components/test/tester/tester'
import TypeTest from './components/test/typeTest/typeTest'
import DataTest from './components/test/dataTest/dataTest'
import {connect} from 'react-redux'

const Test = props => {

    const [state, setState] = useState(false)

    const onClickHandler = useCallback(() => {
        setState(prev => !prev)
    }, [state])

    return (
        <div className={classes.Test}>
            <div className={classes.Title}>
                <Tester/>
                <TypeTest
                    state={state}
                    onClick={onClickHandler}
                />
            </div>
            <div className={classes.HeadData}>
                <DataTest/>
            </div>
            <div className={classes.HeadData}>
                <DataTest
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