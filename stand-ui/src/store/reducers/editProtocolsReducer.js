import {EditProtocols} from '../actionsType/actionsType'

const initialState = {
    protocols: [],
    isLoading: false
}

const handlers = {
    [EditProtocols.START_LOADING] : (state) => ({
       ...state,
       isLoading: true
    }),
    [EditProtocols.STOP_LOADING] : (state, {payload}) => ({
        ...state,
        protocols: payload,
        isLoading: false
    }),
    [EditProtocols.EDIT_PROTOCOL] : (state, {payload}) => ({
        ...state,
        protocols: payload
    }),
    [EditProtocols.SAVE_CHANGES] : (state, {payload}) => ({
        ...state,
        protocols: payload
    }),
    [EditProtocols.CANCEL_CHANGES] : (state, {payload}) => ({
        ...state,
        protocols: payload
    }),
    [EditProtocols.ADD] : (state, {payload}) => ({
        ...state,
        protocols: state.protocols.concat(payload)
    }),
    [EditProtocols.DELETE] : (state, {payload}) => ({
        ...state,
        protocols: state.protocols.filter(item => payload.indexOf(item.id) < 0)
    }),
    DEFAULT: state => state
}

export default function editProtocolsReducer(state=initialState, action){
    const handler = handlers[action.type] || handlers['DEFAULT']
    return handler(state, action)
}