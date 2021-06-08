import React from 'react'
import classes from './home.module.css'
import Test from '../../../components/pages/home/test'
import Program from '../../../components/pages/home/programm'
import {connect} from 'react-redux'
import {
    addStep,
    createNewProgram,
    renameProgram
} from '../../../store/actionCreators/testAction'

/**
 * Компонент, который рендерит домашнюю страницу приложения
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Home = props => {
    return (
        <div className={classes.HomeWrapper}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                    width: '100%'
                }}
            >
                <div>
                    <Test/>
                </div>
                <div style={{marginTop: '2vmin'}}>
                    <Program
                        programName={props.programName}
                        createNewProgram={props.createNewProgramHandler}
                        renameProgram={props.renameCurrentProgramHandler}
                        addStepHandler={props.addNewStepHandler}
                        steps={props.steps}
                    />
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        typeTest: state.testReducer.typeTest,
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
        },
        programName: state.testReducer.programName,
        steps: state.testReducer.steps
    }
}

function mapDispatchToProps(dispatch){
    return {
        createNewProgramHandler: name => dispatch(createNewProgram(name)),
        renameCurrentProgramHandler: newName => dispatch(renameProgram(newName)),
        addNewStepHandler: () => dispatch(addStep())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)