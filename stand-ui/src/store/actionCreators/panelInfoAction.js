import {LOAD_SYSTEM} from "../actionsType/actionsType";
import {DataTest} from '../actionsType/actionsType'

export function loadSystem(){
    return async dispatch => {
        setTimeout(() => {
            dispatch({
                type: LOAD_SYSTEM,
                payload: {
                    modeSystem: false, // Ручной(false) или Автомат(true)
                    serverSystem: true, //Включен или Выключен.
                    stateSystem: true, //Включено или выключено
                }
            })
        }, 3000)
    }
}

export function changeData(key, value){
    return (dispatch, getState) => {
        const obj = getState().panelInfoReducer.realTimeData
        obj[key] = value
        dispatch({
            type: DataTest.CHANGE_DATA_TEST,
            payload: obj
        })
    }
}