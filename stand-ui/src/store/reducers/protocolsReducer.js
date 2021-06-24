import {Protocols} from '../actionsType/actionsType'

const initialState = {
    selectedBeginDate: null, //дата начала сортировки (фильтр)
    selectedEndDate: null, //дата окончания сортировки (фильтр),
    programName: null, //наименование программы (фильтр)
    protocols: [], //массив протоколов испытаний
    isLoading: false //загружены данные или нет
}

const handlers = {
    [Protocols.START_LOADING] : (state) => ({
       ...state,
       isLoading: true
    }),
    [Protocols.STOP_LOADING] : (state, {payload}) => ({
       ...state,
       isLoading: false,
       protocols: payload
    }),
    [Protocols.SET_BEGIN_DATA] : (state, {payload}) => ({
        ...state,
        selectedBeginDate: payload
    }),
    [Protocols.SET_END_DATA] : (state, {payload}) => ({
        ...state,
        selectedEndDate: payload
    }),
    [Protocols.SET_PROGRAM_NAME] : (state, {payload}) => ({
        ...state,
        programName: payload
    }),
    [Protocols.FILTER_DATA] : (state, {payload}) => ({
        ...state,
        protocols: payload
    }),
    DEFAULT: state => state
}

export default function protocolsReducer(state=initialState, action){
    const handle = handlers[action.type] || handlers['DEFAULT']
    return handle(state, action)
}