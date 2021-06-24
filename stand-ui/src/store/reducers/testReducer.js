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
    steps: [],
    modeSystem: true, // Ручной(false) или Автомат(true)
    serverSystem: true, //Включен или Выключен.
    stateSystem: false, //Включено или выключено
    currentAccidentInfo: '一',
    currentAccidentWarning: '一',
    currentAccidentError: '一',
    realTimeData: {
        duration: '一',
        speed: '一',
        mileage: '一',
        step: '一',
        durationStep: '一',
        mileageStep: '一',
        torque: '一',
        load1: '一',
        load2: '一',
        pressure1: '一',
        pressure2: '一',
        dynamicR1: '一',
        dynamicR2: '一',
        temperatureChamber1: '一', //температура камеры
        temperatureChamber2: '一',
        temperatureTread1: '一', //температура протектора
        temperatureTread2: '一',
        temperatureBoard1: '一', //температура борта
        temperatureBoard2: '一',
        TMPS1: '一',
        TMPS2: '一'
    }
}

const handlers = {
    [Test.START_TEST] : (state, {payload}) => ({
        ...state,
        realTimeData: payload
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
    [Test.SET_DATA_TEST] : (state, {payload}) => ({
        ...state,
        [payload.typePosition]: payload.newState
    }),
    DEFAULT: state => state
}

export default function testReducer(state=initialState, action){
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)
}