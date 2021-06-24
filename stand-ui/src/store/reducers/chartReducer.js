import {Chart} from "../actionsType/actionsType";

const initialState = {
    speed: []
}

const handlers = {
    [Chart.CHANGE_DATA] : (state, {payload}) => ({
        ...state,
        speed: {payload}
    }),
    DEFAULT: state => state
}

export default function ChartReducer(state=initialState, action){
    const handler = handlers[action.type] || handlers['DEFAULT']

    return handler(state, action)
}