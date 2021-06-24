import {Auth, Employees} from '../actionsType/actionsType'
import {SIGN_IN_URL, SING_UP_URL, URL} from '../../constants/index'

export function loadEmployees(){
    return async dispatch => {
        try{
            dispatch(startLoading())
            const response = await fetch(`${URL}/users.json`)
            const fetchEmployees = await response.json()
            let employees = null
            if (fetchEmployees){
                employees = Object.keys(fetchEmployees).map(key => ({
                    ...fetchEmployees[key],
                    id: key
                }))
            }
            else {
                employees = []
            }
            dispatch(stopLoading(employees))
        }
        catch (e){
            console.log('Error loading employees: ', e)
        }
    }
}

export function fireEmployee(employee){
    return (dispatch, getState) => {
        const users = getState().usersReducer.users

        const res = users.map(item => {
            if (item.id === employee.id){
                return {
                    ...item,
                    deleted: !employee.deleted
                }
            }
            else{
                return {
                    ...item
                }
            }
        })

        dispatch({
            type: Employees.FIRE_EMPLOYEE,
            payload: res
        })
    }
}

export function changeDataUser(key, value){
    return (dispatch, getState) => {
        const defaultUser = getState().usersReducer.user
        const changedUser = {
            ...defaultUser,
            [key]: value
        }

        dispatch({
            type: Employees.CHANGE_DATA,
            payload: changedUser
        })
    }
}

export function changeRole(employee){
    return (dispatch, getState) => {
        const users = getState().usersReducer.users

        const res = users.map(item => {
            if (item.id === employee.id){
                return {
                    ...item,
                    position: employee.position === 'Сотрудник'? 'Администратор' : 'Сотрудник'
                }
            }
            else{
                return {
                    ...item
                }
            }
        })
        dispatch({
            type: Employees.CHANGE_ROLE,
            payload: res
        })
    }
}

export function logout(){
    return (dispatch) => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('userEmail')
        dispatch({
            type: Employees.LOGOUT
        })
    }
}

export function signIn(email, password){
    return async (dispatch) => {
        try{
            const authData = {
                email, password
            }
            const responseSignIn = await fetch(`${SIGN_IN_URL}`, {
                method: 'POST',
                body: JSON.stringify(authData)
            })
            const signInJSON = await responseSignIn.json()

            if (signInJSON.error){
                throw new Error(signInJSON.error.message)
            }

            localStorage.setItem('token', signInJSON.idToken)
            localStorage.setItem('userId', signInJSON.localId)
            localStorage.setItem('userEmail', signInJSON.email)

            dispatch({
                type: Employees.SIGN_IN,
                payload: {
                    sessionToken: localStorage.getItem('token'),
                    userEmail: localStorage.getItem('userEmail')
                }
            })

        }
        catch (e){
            alert(e.message)
        }
    }
}

export function addUser(employee){
    return async (dispatch) => {
        try{
            const authData = {
                email: employee.email,
                password: employee.password,
                returnSecureToken: true
            }

            const responseRegister = await fetch(`${SING_UP_URL}`, {
                method: 'POST',
                body: JSON.stringify(authData)
            })

            const resultRegister = await responseRegister.json()

            console.log(resultRegister)

            if (resultRegister.error){
                throw new Error(resultRegister.error.message)
            }
            else{
                const response = await fetch(`${URL}/users.json`, {
                    method: 'POST',
                    body: JSON.stringify({
                        deleted: false,
                        email: employee.email,
                        lastName: employee.lastName,
                        name: employee.name,
                        phone: employee.phone,
                        position: employee.position,
                        surname: employee.surname,
                        password: employee.password
                    })
                })

                const result = await response.json()

                alert('Сотрудник успешно добавлен')

                dispatch({
                    type: Employees.ADD_EMPLOYEE,
                    payload: {
                        id: result.name,
                        ...employee
                    }
                })
            }

        }
        catch (e) {
            alert(e.message)
        }
    }
}

export function deleteUsers(ids){
    return async (dispatch) => {
        console.log(ids)
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
            type: Employees.DELETE_EMPLOYEES,
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