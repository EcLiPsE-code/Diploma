import {Employees} from '../actionsType/actionsType'

const initialState = {
    users: [],
    isLoading: false
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
    DEFAULT: state => state
}

export default function usersReducer(state=initialState, action){
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)
}