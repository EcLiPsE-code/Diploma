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
        const state = getState()
        dispatch({
            type: Test.ADD_STEP,
            payload: {
                numberStep: state.testReducer.steps.length + 1,
                pressure1: 0,
                load1: 0,
                duration: null,
                speed: 0,
                mileage: 0,
                pressure2: 0,
                load2: 0
            }
        })
    }
}