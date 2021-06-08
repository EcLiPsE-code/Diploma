import {Test} from '../actionsType/actionsType'

const initialState = {
    typeTest: null,
    position1: {
        protocol: null,
        model: null,
        size: null,
        number: null,
        rDin: null,
        methodology: null
    },
    position2: {
        protocol: null,
        model: null,
        size: null,
        number: null,
        rDin: null,
        methodology: null
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
        steps: payload
    }),
    [Test.CANCEL_CHANGES] : (state, {payload}) => ({
        ...state,
        steps: payload
    }),
    [Test.DELETE_STEP] : (state, {payload}) => ({
        ...state,
        steps: payload
    }),
    [Test.EDIT] : (state, {payload}) => ({
        ...state,
        steps: payload
    }),
    [Test.SAVE_DATA_STEP] : (state, {payload}) => ({
       ...state,
        steps: payload
    }),
    [Test.SET_TYPE_TEST] : (state, {payload}) => ({
        ...state,
        typeTest: payload
    }),
    [Test.SET_DATA_TEST_POS1] : (state, {payload}) => ({
        ...state,
        position1: payload
    }),
    [Test.SET_DATA_TEST_POS2] : (state, {payload}) => ({
        ...state,
        position2: payload
    }),
    DEFAULT: state => state
}

export default function testReducer(state=initialState, action){
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)
}