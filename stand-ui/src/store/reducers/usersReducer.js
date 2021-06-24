import {Employees} from '../actionsType/actionsType'

const initialState = {
    users: [],
    isLoading: false,
    user: undefined,
    token: undefined
}

const handlers = {
    [Employees.START_LOADING] : (state) => ({
        ...state,
        isLoading: true
    }),
    [Employees.STOP_LOADING] : (state, {payload}) => ({
       ...state,
       users: payload,
       isLoading: false
    }),
    [Employees.ADD_EMPLOYEE] : (state, {payload}) => ({
       ...state,
       users: state.users.concat(payload)
    }),
    [Employees.DELETE_EMPLOYEES] : (state, {payload}) => ({
        ...state,
        users: state.users.filter(item => payload.indexOf(item.id) < 0)
    }),
    [Employees.SIGN_IN] : (state, {payload}) => ({
        ...state,
        token: payload.sessionToken,
        user: state.users.find(item => item.email === payload.userEmail)
    }),
    [Employees.LOGOUT] : (state) => ({
        ...state,
        user: undefined,
        token: undefined
    }),
    [Employees.FIRE_EMPLOYEE] : (state, {payload}) => ({
        ...state,
        users: payload
    }),
    [Employees.CHANGE_ROLE] : (state, {payload}) => ({
        ...state,
        users: payload
    }),
    [Employees.CHANGE_DATA] : (state, {payload}) => ({
        ...state,
        user: payload
    }),
    DEFAULT: state => state
}

export default function usersReducer(state=initialState, action){
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)
}