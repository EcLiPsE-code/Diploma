import {combineReducers} from 'redux'
import panelInfoReducer from './reducers/panelInfoReducer'
import testReducer from './reducers/testReducer'
import personalAreaReducer from './reducers/personalAreaReducer'
import protocolsReducer from './reducers/protocolsReducer'
import accidentsReducer from './reducers/accidentsReducer'
import usersReducer from './reducers/usersReducer'
import editProtocolsReducer from './reducers/editProtocolsReducer'
import editMethodologysReducer from './reducers/editMethodologysReducer'
import chartReducer from './reducers/chartReducer'
import authReducer from './reducers/authReducer'

export default combineReducers({
    panelInfoReducer,
    testReducer,
    personalAreaReducer,
    protocolsReducer,
    accidentsReducer,
    usersReducer,
    editProtocolsReducer,
    editMethodologysReducer,
    chartReducer,
    authReducer
})