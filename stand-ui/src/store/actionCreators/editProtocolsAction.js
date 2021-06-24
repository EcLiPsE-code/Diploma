import {EditMethodologys, EditProtocols} from '../actionsType/actionsType'
import {URL} from '../../constants/index'

export function loadProtocols(){
    return async dispatch => {
        try{
            dispatch(startLoading())
            const response = await fetch(`${URL}/protocols.json`)
            const fetchProtocols = await response.json()
            const protocols = Object.keys(fetchProtocols).map(key => ({
                ...fetchProtocols[key],
                id: key
            }))
            dispatch(stopLoading(protocols))
        }
        catch (e){
            console.log('Error load protocols')
        }
    }
}

export function deleteProtocols(ids){
    return async (dispatch) => {
        console.log(ids)
        ids.forEach(id => {
            fetch(`${URL}/protocols/${id}.json`, {
                method: 'DELETE',
            }).then(response => {
                if (!response.ok){
                    throw new Error(`Error delete protocols`)
                }
                else{
                    console.log('Successfully')
                }
            })
        })
        dispatch({
            type: EditProtocols.DELETE,
            payload: ids
        })
    }
}

export function addProtocol(name){
    return async (dispatch, getState) => {
        let protocols = getState().editProtocolsReducer.protocols
        const response = await fetch(`${URL}/protocols.json`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name,
                number: protocols.length + 1
            })
        })

        if (!response.ok){
            throw new Error('Error add new protocols')
        }

        const resName = await response.json()

        dispatch({
            type: EditProtocols.ADD,
            payload: {
                id: resName.name,
                name,
                number: protocols.length + 1
            }
        })
    }
}

export function saveChanges(protocol){
    return async (dispatch, getState) => {
        let protocols = getState().editProtocolsReducer.protocols
        const res = protocols.map(item => {
            if (item.id === protocol.id){
                return {
                    ...item,
                    name: protocol.name,
                    edit: false
                }
            }
            else{
                return {
                    ...item
                }
            }
        })
        const response = await fetch(`${URL}/protocols/${protocol.id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name: protocol.name,
                number: protocol.number
            })
        })
        if (!response.ok){
            throw new Error('Error editing protocol')
        }
        dispatch({
            type: EditProtocols.SAVE_CHANGES,
            payload: res
        })
    }
}

export function cancelChanges(id){
    return (dispatch, getState) => {
        let protocols = getState().editProtocolsReducer.protocols
        const res = protocols.map(item => {
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
            type: EditProtocols.CANCEL_CHANGES,
            payload: res
        })
    }
}

export function editProtocol(id){
    return (dispatch, getState) => {
        let protocols = getState().editProtocolsReducer.protocols
        const res = protocols.map(item => {
            if (item.id === id){
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
            type: EditProtocols.EDIT_PROTOCOL,
            payload: res
        })
    }
}

function startLoading(){
    return {
        type: EditProtocols.START_LOADING
    }
}

function stopLoading(protocols){
    return {
        type: EditProtocols.STOP_LOADING,
        payload: protocols
    }
}