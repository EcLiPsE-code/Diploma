import {LOAD_SYSTEM} from "../actionsType/panelInfo";

const initialState = {
    modeSystem: true, // Ручной(false) или Автомат(true)
    serverSystem: false, //Включен или Выключен.
    stateSystem: false, //Включено или выключено
    currentAccidentInfo: '一',
    currentAccidentWarning: '一',
    currentAccidentError: '一',
}

export default function panelInfoReducer(state=initialState, action){
    switch (action.type){
        case LOAD_SYSTEM:
            return {
                ...state,
                modeSystem: action.payload.modeSystem,
                serverSystem: action.payload.serverSystem,
                stateSystem: action.payload.stateSystem
            }
        default: return state
    }
}