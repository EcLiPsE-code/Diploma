import {LOAD_SYSTEM} from "../../actionsType/panelInfo";

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