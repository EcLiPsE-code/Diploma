import {URL} from '../../constants/index'
import {Test} from '../actionsType/actionsType'
import randomInteger from '../../helerps/randomizer/randomizer'
import {parseTime} from '../../helerps/dateFormatter/formatter'

export function startTest(){
    return (dispatch, getState) => {
        const steps = getState().testReducer.steps
        const typeTest = getState().testReducer.typeTest

        const newState = {
            duration: parseTime(steps[0].duration),
            speed: randomInteger(0, 120),
            mileage: randomInteger(0, 200),
            step: randomInteger(0, 15),
            durationStep: randomInteger(0, 100),
            mileageStep: randomInteger(20, 50),
            torque: randomInteger(20, 100),
            load1: randomInteger(0, 1000),
            load2: typeTest === 'КСК'? randomInteger(0, 1000) : null,
            pressure1: randomInteger(0, 500),
            pressure2: typeTest === 'КСК'? randomInteger(0, 500) : null,
            dynamicR1: randomInteger(1, 255),
            dynamicR2: typeTest === 'КСК'? randomInteger(1, 255) : null,
            temperatureChamber1: randomInteger(0, 100),
            temperatureChamber2: typeTest === 'КСК'? randomInteger(0, 100) : null,
            temperatureTread1: randomInteger(0, 125),
            temperatureTread2: typeTest === 'КСК'? randomInteger(0, 125) : null,
            temperatureBoard1: randomInteger(0, 50),
            temperatureBoard2: typeTest === 'КСК'? randomInteger(0, 20) : null,
            TMPS1: randomInteger(0, 10),
            TMPS2: typeTest === 'КСК'? randomInteger(0, 10) : null
        }
        dispatch({
            type: Test.START_TEST,
            payload: newState
        })
    }
}

export function createNewProgram(name){
    return {
        type: Test.CREATE_NEW_PROGRAM,
        payload: name
    }
}

export function renameProgram(newNameProgram){
    return {
        type: Test.RENAME_PROGRAM,
        payload: newNameProgram
    }
}

export function addStep(){
    return (dispatch, getState) => {
        const steps = getState().testReducer.steps
        steps.push({
            numberStep: steps.length + 1,
            pressure1: 0,
            load1: 0,
            duration: 0,
            speed: 0,
            mileage: 0,
            pressure2: 0,
            load2: 0,
            edit: false
        })
        dispatch({
            type: Test.ADD_STEP,
            payload: steps
        })
    }
}

export function deleteStep(numberStep){
    return (dispatch, getState) => {
        let steps = getState().testReducer.steps.filter(item => item.numberStep !== numberStep)
        const newSteps = steps.map((item, index) => ({
            ...item,
            numberStep: index + 1
        }))
        dispatch({
          type: Test.DELETE_STEP,
          payload: newSteps
        })
    }
}

export function saveChangeStep(dataStep){
    return (dispatch, getState) => {
        const steps = getState().testReducer.steps.map(item => {
            if (item.numberStep === dataStep.numberStep) {
                return {
                    ...dataStep,
                    edit: false
                }
            }
            else{
                return {
                    ...item
                }
            }
        })
        dispatch({
            type: Test.SAVE_DATA_STEP,
            payload: steps
        })
    }
}

export function editDataStep(numberStep){
    return (dispatch, getState) => {
        const steps = getState().testReducer.steps.map(item => {
            if (item.numberStep === numberStep){
                return {
                    ...item,
                    edit: true
                }
            }
            else{
                return {
                    ...item
                }
            }
        })
        dispatch({
            type: Test.EDIT,
            payload: steps
        })
    }
}

export function cancelChangesStep(numberStep){
    return (dispatch, getState) => {
        const steps = getState().testReducer.steps.map(item => {
            if (item.numberStep === numberStep){
                return {
                    ...item,
                    edit: false
                }
            }
            else{
                return {
                    ...item
                }
            }
        })
        dispatch({
            type: Test.CANCEL_CHANGES,
            payload: steps
        })
    }
}

export function setTypeTest(typeTest){
    return {
        type: Test.SET_TYPE_TEST,
        payload: typeTest
    }
}

export function setDataTest(typePosition, key, value){
    return (dispatch, getState) => {
        const state = getState().testReducer[typePosition]
        const newState = {
            ...state,
            [key]: value
        }
        dispatch({
            type: Test.SET_DATA_TEST,
            payload: {
                typePosition, newState
            }
        })
    }
}