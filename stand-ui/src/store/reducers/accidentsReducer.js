import {Accidents} from "../actionsType/actionsType"

const initialState = {
    accidents: [],
    isLoading : false
}

const handlers = {
    [Accidents.START_LOADING]: (state) => ({
        ...state,
        isLoading: true
    }),
    [Accidents.STOP_LOADING]: (state, {payload}) => ({
        ...state,
        accidents: payload,
        isLoading: false
    }),
    DEFAULT: state => state
}


export default function AccidentsReducer(state=initialState, action){
    const handle = handlers[action.type] || handlers['DEFAULT']
    return handle(state, action)
}