import {URL} from '../../constants/index'
import {Accidents} from '../actionsType/actionsType'

export function loadAccidents(){
    return async dispatch => {
        try{
            dispatch(startLoading())
            const response = await fetch(`${URL}/accidents.json`)
            const fetchAccidents = await response.json()
            const accidents = Object.keys(fetchAccidents).map(key => ({
                ...fetchAccidents[key],
                id: key
            }))
            dispatch(stopLoading(accidents))
        }
        catch (e){
            console.log('Error accidents: ', e)
        }
    }
}

function startLoading(){
    return {
        type: Accidents.START_LOADING,
    }
}

function stopLoading(accidents){
    return {
        type: Accidents.STOP_LOADING,
        payload: accidents
    }
}