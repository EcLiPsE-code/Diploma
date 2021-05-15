import {combineReducers} from 'redux'
import panelInfoReducer from './reducers/panelInfoReducer'
import testReducer from './reducers/testReducer'
import personalAreaReducer from './reducers/personalAreaReducer'

export default combineReducers({
    panelInfoReducer, testReducer, personalAreaReducer
})