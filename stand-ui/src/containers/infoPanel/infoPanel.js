import React from 'react'
import System from '../../components/info/system/system'
import CurrentAccidents from '../../components/info/currentAccidents/currentAccidents'
import RealtimeData from '../../components/info/realtimeData/realtimeData'
import classes from './infoPanel.module.css'

const InfoPanel = props => {
    return (
        <div className={classes.InfoPanel}>
            <System/>
            <CurrentAccidents/>
            <RealtimeData/>
        </div>
    )
}

export default InfoPanel
