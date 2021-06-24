import {EditMethodologys} from '../actionsType/actionsType'
import {URL} from '../../constants/index'


export function loadMethodologys(){
    return async dispatch => {
        try{
            dispatch(startLoading())
            const response = await fetch(`${URL}/methodologys.json`)
                .then(response => response.json())
            const methodologys = Object.keys(response).map(key => ({
                ...response[key],
                id: key,
                edit: false
            }))
            dispatch(stopLoading(methodologys))
        }
        catch (e){
            console.log('Error loading methodologys: ', e)
        }
    }
}

export function deleteMethodology(ids){
    return async (dispatch) => {
        console.log(ids)
        ids.forEach(id => {
            fetch(`${URL}/methodologys/${id}.json`, {
                method: 'DELETE',
            }).then(response => {
                if (!response.ok){
                    throw new Error(`Error delete methodology`)
                }
                else{
                    console.log('Successfully')
                }
            })
        })
        dispatch({
            type: EditMethodologys.DELETE,
            payload: ids
        })
    }
}

export function addMethodology(name){
    return async (dispatch, getState) => {
        let methodologys = getState().editMethodologysReducer.methodologys
        const numberLastElement = methodologys[methodologys.length - 1].number
        const response = await fetch(`${URL}/methodologys.json`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name,
                number: numberLastElement + 1
            })
        })
        if (!response.ok){
            throw new Error('Error add new methodology')
        }

        const res = await response.json()

        dispatch({
            type: EditMethodologys.ADD,
            payload: {
                id: res.name,
                name,
                number: numberLastElement + 1
            }
        })
    }
}

export function saveChanges(methodology){
    return async (dispatch, getState) => {
        console.log(methodology)
        let methodologys = getState().editMethodologysReducer.methodologys
        const res = methodologys.map(item => {
            if (item.id === methodology.id){
                return {
                    ...item,
                    name: methodology.name,
                    edit: false
                }
            }
            else{
                return {
                    ...item
                }
            }
        })
        const response = await fetch(`${URL}/methodologys/${methodology.id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: methodology.name,
                number: methodology.number
            })
        })
        if (!response.ok){
            throw new Error('Error editing methodology')
        }
        dispatch({
            type: EditMethodologys.SAVE_CHANGES,
            payload: res
        })
    }
}

export function cancelChanges(id){
    return (dispatch, getState) => {
        let methodologys = getState().editMethodologysReducer.methodologys
        const res = methodologys.map(item => {
            if (item.id === id){
                return {
                    ...item,
                    edit: false
                }
            }
            else{
                return {
                    ...item
                }
            }
        })
        dispatch({
            type: EditMethodologys.CANCEL_CHANGES,
            payload: res
        })
    }
}

export function editMethodology(id){
    return (dispatch, getState) => {
        let methodologys = getState().editMethodologysReducer.methodologys
        const res = methodologys.map(item => {
            if (item.id === id){
                console.log(id)
                return {
                    ...item,
                    edit: true
                }
            }
            else{
                return {
                    ...item
                }
            }
        })
        dispatch({
            type: EditMethodologys.EDIT_METHODOLOGY,
            payload: res
        })
    }
}

function startLoading(){
    return {
        type: EditMethodologys.START_LOADING
    }
}

function stopLoading(methodologys){
    return {
        type: EditMethodologys.STOP_LOADING,
        payload: methodologys
    }
}