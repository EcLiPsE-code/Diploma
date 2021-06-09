import React, {useEffect} from 'react'
import System from '../../components/info/system/system'
import CurrentAccidents from '../../components/info/currentAccidents/currentAccidents'
import RealtimeData from '../../components/info/realtimeData/realtimeData'
import classes from './infoPanel.module.css'
import {connect} from 'react-redux'
import {loadSystem} from '../../store/actionCreators/panelInfoAction'
import {startTest} from "../../store/actionCreators/testAction";

/**
 * Компонент, необходимый для формирования панели,
 * на которой отображаются числовые данные во время проведения испытания
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const InfoPanel = props => {

    useEffect(() => {
        props.fetchLoadSystem()
    }, [props.modeSystem, props.stateSystem, props.serverSystem])

    return (
        <div className={classes.InfoPanel}>
            <System
                mode={props.modeSystem}
                server={props.serverSystem}
                stateSystem={props.stateSystem}
            />
            <CurrentAccidents
                currentAccidentInfo={props.currentAccidentInfo}
                currentAccidentWarnong={props.currentAccidentWarning}
                currentAccidentError={props.currentAccidentError}
            />
            <RealtimeData
                startTestHandler={props.startTestHandler}
            />
        </div>
    )
}

function mapStateToProps(state){
    return {
        modeSystem: state.panelInfoReducer.modeSystem,
        serverSystem: state.panelInfoReducer.serverSystem,
        stateSystem: state.panelInfoReducer.stateSystem,
        currentAccidentInfo: state.panelInfoReducer.currentAccidentInfo,
        currentAccidentWarning: state.panelInfoReducer.currentAccidentWarning,
        currentAccidentError: state.panelInfoReducer.currentAccidentError,
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchLoadSystem: () => dispatch(loadSystem()),
        startTestHandler: () => dispatch(startTest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel)
