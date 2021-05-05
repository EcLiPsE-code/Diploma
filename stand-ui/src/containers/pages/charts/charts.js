import React from 'react'
import classes from './charts.module.css'
import UserChart from "../../../components/pages/charts/components/chart"

const Charts = props => {
    return (
        <div className={classes.ChartsWrapper}>
            <div className={classes.Chart}>
                <UserChart
                    id={'chart-1'}
                    text={'Скорость'}
                />
            </div>
            <div className={classes.Chart}>
                <UserChart
                    id={'chart-2'}
                    text={'нагрузка П1'}
                />
            </div>
            <div className={classes.Chart}>
                <UserChart
                    id={'chart-3'}
                    text={'нагрузка П2'}
                />
            </div>
        </div>
    )
}

export default Charts