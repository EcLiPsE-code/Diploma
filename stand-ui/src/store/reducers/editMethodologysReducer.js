import {EditMethodologys} from '../actionsType/actionsType'

const initialState = {
    methodologys: [],
    isLoading: false
}

const handlers = {
    [EditMethodologys.START_LOADING] : (state) => ({
        ...state,
        isLoading: true
    }),
    [EditMethodologys.STOP_LOADING] : (state, {payload}) => ({
        ...state,
        methodologys: payload,
        isLoading: false
    }),
    [EditMethodologys.EDIT_METHODOLOGY] : (state, {payload}) => ({
        ...state,
        methodologys: payload
    }),
    [EditMethodologys.SAVE_CHANGES] : (state, {payload}) => ({
       ...state,
       methodologys: payload
    }),
    [EditMethodologys.CANCEL_CHANGES] : (state, {payload}) => ({
        ...state,
        methodologys: payload
    }),
    [EditMethodologys.ADD] : (state, {payload}) => ({
        ...state,
        methodologys: state.methodologys.concat(payload)
    }),
    [EditMethodologys.DELETE] : (state, {payload}) => ({
        ...state,
        methodologys: state.methodologys.filter(item => payload.indexOf(item.id) < 0)
    }),
    DEFAULT: state => state
}

export default function editMethodologysReducer(state=initialState, action){
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)
}