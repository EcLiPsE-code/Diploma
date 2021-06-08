import {EditProtocols, Employees} from '../actionsType/actionsType'
import {URL} from '../../constants/index'

export function loadEmployees(){
    return async dispatch => {
        try{
            dispatch(startLoading())
            const response = await fetch(`${URL}/users.json`)
            const fetchEmployees = await response.json()
            const employees = Object.keys(fetchEmployees).map(key => ({
                ...fetchEmployees[key],
                id: key
            }))
            dispatch(stopLoading(employees))
        }
        catch (e){
            console.log('Error loading employees: ', e)
        }
    }
}

export function deleteUsers(ids){
    return async (dispatch) => {
        ids.forEach(id => {
            fetch(`${URL}/users/${id}.json`, {
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

function startLoading(){
    return {
        type: Employees.START_LOADING
    }
}

function stopLoading(employees){
    return {
        type: Employees.STOP_LOADING,
        payload: employees
    }
}