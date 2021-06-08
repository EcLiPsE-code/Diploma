import {URL} from '../../constants/index'
import {Protocols} from '../actionsType/actionsType'

export function loadProtocols(){
    return async dispatch => {
        try{
            dispatch(startLoading())
            const response = await fetch(`${URL}/programs.json`)
            const fetchProtocols = await response.json()
            const protocolsArr = Object.keys(fetchProtocols).map(key => ({
                ...fetchProtocols[key],
                id: key
            }))
            dispatch(stopLoading(protocolsArr))
        }
        catch (e) {
            console.log(e)
        }
    }
}

function startLoading(){
    return {
        type: Protocols.START_LOADING
    }
}

function stopLoading(protocols){
    return {
        type: Protocols.STOP_LOADING,
        payload: protocols
    }
}

export function filterData(){
    return dispatch => {
        dispatch({
            type: Protocols.FILTER_DATA
        })
    }
}

export function setProgramName(programName){
    return dispatch => {
        dispatch({
            type: Protocols.SET_PROGRAM_NAME,
            payload: programName
        })
    }
}

export function setDateBegin(date){
    return dispatch => {
        dispatch({
            type: Protocols.SET_BEGIN_DATA,
            payload: date
        })
    }
}

export function setDateEnd(date){
    return dispatch => {
        dispatch({
            type: Protocols.SET_END_DATA,
            payload: date
        })
    }
}

