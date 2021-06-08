import React, {useEffect} from 'react'
import classes from './home.module.css'
import Test from '../../../components/pages/home/test'
import Program from '../../../components/pages/home/programm'
import {connect} from 'react-redux'
import {
    addStep, cancelChangesStep,
    createNewProgram, deleteStep, editDataStep,
    renameProgram, saveChangeStep, setDataTestPos1, setDataTestPos2, setTypeTest
} from '../../../store/actionCreators/testAction'
import {loadProtocols} from '../../../store/actionCreators/editProtocolsAction'
import {loadMethodologys} from '../../../store/actionCreators/editMethodologysAction'


/**
 * Компонент, который рендерит домашнюю страницу приложения
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Home = props => {

    useEffect(() => {
        props.loadProtocolsHandler()
        props.loadMethodologysHandler()
    }, [])

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
                    <Test
                        setTypeTestHandler={props.setTypeTestHandler}
                        methodologys={props.methodologys}
                        protocols={props.protocols}
                        setDataTestPos1Handler={props.setDataTestPos1Handler}
                        setDataTestPos2Handler={props.setDataTestPos2Handler}
                    />
                </div>
                <div style={{marginTop: '2vmin'}}>
                    <Program
                        typeTest={props.typeTest}
                        programName={props.programName}
                        createNewProgram={props.createNewProgramHandler}
                        renameProgram={props.renameCurrentProgramHandler}
                        addStepHandler={props.addNewStepHandler}
                        deleteStep={props.deleteStepHandler}
                        saveChangesStep={props.saveChangesStepHandler}
                        editDataStep={props.editDataStepHandler}
                        cancelChangesStep={props.cancelChangesStepHandler}
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
            methodology: state.testReducer.methodology
        },
        position2: {
            protocol: state.testReducer.protocol,
            model: state.testReducer.model,
            size: state.testReducer.size,
            number: state.testReducer.number,
            rDin: state.testReducer.rDin,
            methodology: state.testReducer.methodology
        },
        programName: state.testReducer.programName,
        steps: state.testReducer.steps,
        protocols: state.editProtocolsReducer.protocols,
        methodologys: state.editMethodologysReducer.methodologys
    }
}

function mapDispatchToProps(dispatch){
    return {
        createNewProgramHandler: name => dispatch(createNewProgram(name)),
        renameCurrentProgramHandler: newName => dispatch(renameProgram(newName)),
        addNewStepHandler: () => dispatch(addStep()),
        deleteStepHandler: numberStep => dispatch(deleteStep(numberStep)),
        saveChangesStepHandler: dataStep => dispatch(saveChangeStep(dataStep)),
        editDataStepHandler: numberStep => dispatch(editDataStep(numberStep)),
        cancelChangesStepHandler: numberStep => dispatch(cancelChangesStep(numberStep)),
        setTypeTestHandler: typeTest => dispatch(setTypeTest(typeTest)),
        loadProtocolsHandler: () => dispatch(loadProtocols()),
        loadMethodologysHandler: () => dispatch(loadMethodologys()),
        setDataTestPos1Handler: data => dispatch(setDataTestPos1(data)),
        setDataTestPos2Handler: data => dispatch(setDataTestPos2(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)