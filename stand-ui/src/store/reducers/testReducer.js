import {Test} from '../actionsType/actionsType'

const initialState = {
    typeTest: null,
    position1: {
        protocol: null,
        model: null,
        size: null,
        number: null,
        rDin: null,
        method: null
    },
    position2: {
        protocol: null,
        model: null,
        size: null,
        number: null,
        rDin: null,
        method: null
    },
    programName: null,
    steps: []
}

const handlers = {
    [Test.START_TEST] : (state, {payload}) => ({
        ...state
    }),
    [Test.END_TEST] : (state, {payload}) => ({
        ...state
    }),
    [Test.CREATE_NEW_PROGRAM] : (state, {payload}) => ({
        ...state,
        programName: payload
    }),
    [Test.RENAME_PROGRAM] : (state, {payload}) => ({
        ...state,
        programName: payload
    }),
    [Test.ADD_STEP] : (state, {payload}) => ({
        ...state,
        steps: state.steps.concat(payload)
    }),
    DEFAULT: state => state
}

export default function testReducer(state=initialState, action){
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)
}