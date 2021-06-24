import {LOAD_SYSTEM} from "../actionsType/actionsType";
import {DataTest} from '../actionsType/actionsType'

const initialState = {
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
    [DataTest.CHANGE_DATA_TEST] : (state, {payload}) => ({
        ...state,
        realTimeData: payload
    }),
    DEFAULT: state => state
}

export default function panelInfoReducer(state=initialState, action){
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)
}