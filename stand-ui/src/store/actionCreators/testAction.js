import {URL} from '../../constants/index'
import {Test} from '../actionsType/actionsType'

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

export function setDataTestPos1(data){
    const {protocol, model, size, number, rDin, methodology} = data
    console.log(`pos1: ${data}`)
    return {
        type: Test.SET_DATA_TEST_POS1,
        payload: {
            protocol, model, size, number, rDin, methodology
        }
    }
}

export function setDataTestPos2(data){
    const {protocol, model, size, number, rDin, methodology} = data
    return {
        type: Test.SET_DATA_TEST_POS2,
        payload: {
            protocol, model, size, number, rDin, methodology
        }
    }
}