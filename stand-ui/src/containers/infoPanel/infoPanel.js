import React, {useEffect} from 'react'
import System from '../../components/info/system/system'
import CurrentAccidents from '../../components/info/currentAccidents/currentAccidents'
import RealtimeData from '../../components/info/realtimeData/realtimeData'
import classes from './infoPanel.module.css'
import {connect} from 'react-redux'
import {changeData, loadSystem} from '../../store/actionCreators/panelInfoAction'
import {startTest} from '../../store/actionCreators/testAction'

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
                realTimeData={props.realTimeData}
            />
        </div>
    )
}

function mapStateToProps(state){
    return {
        modeSystem: state.testReducer.modeSystem,
        serverSystem: state.testReducer.serverSystem,
        stateSystem: state.testReducer.stateSystem,
        currentAccidentInfo: state.testReducer.currentAccidentInfo,
        currentAccidentWarning: state.testReducer.currentAccidentWarning,
        currentAccidentError: state.testReducer.currentAccidentError,
        realTimeData: {
            duration: state.testReducer.realTimeData.duration,
            speed: state.testReducer.realTimeData.speed,
            mileage: state.testReducer.realTimeData.mileage,
            step: state.testReducer.realTimeData.step,
            durationStep: state.testReducer.realTimeData.durationStep,
            mileageStep: state.testReducer.realTimeData.mileageStep,
            torque: state.testReducer.realTimeData.torque,
            load1: state.testReducer.realTimeData.load1,
            load2: state.testReducer.realTimeData.load2,
            pressure1: state.testReducer.realTimeData.pressure1,
            pressure2: state.testReducer.realTimeData.pressure2,
            dynamicR1: state.testReducer.realTimeData.dynamicR1,
            dynamicR2: state.testReducer.realTimeData.dynamicR2,
            temperatureChamber1: state.testReducer.realTimeData.temperatureChamber1, //температура камеры
            temperatureChamber2: state.testReducer.realTimeData.temperatureChamber2,
            temperatureTread1: state.testReducer.realTimeData.temperatureTread1, //температура протектора
            temperatureTread2: state.testReducer.realTimeData.temperatureTread2,
            temperatureBoard1: state.testReducer.realTimeData.temperatureBoard1, //температура борта
            temperatureBoard2: state.testReducer.realTimeData.temperatureBoard2,
            TMPS1: state.testReducer.realTimeData.TMPS1,
            TMPS2: state.testReducer.realTimeData.TMPS2
        }
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchLoadSystem: () => dispatch(loadSystem()),
        startTestHandler: () => dispatch(startTest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel)
