import {combineReducers} from "redux"
import panelInfoReducer from './reducers/panelInfoReducer'
import testReducer from './reducers/testReducer'

export default combineReducers({
    panelInfoReducer, testReducer
})