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
                    textY={'Скорость'}
                />
            </div>
            <div className={classes.Chart}>
                <UserChart
                    id={'chart-2'}
                    text={'Нагрузка П1'}
                    textY={'Нагрузка в П1'}
                />
            </div>
            <div className={classes.Chart}>
                <UserChart
                    id={'chart-3'}
                    text={'Нагрузка П2'}
                    textY={'Нагрузка в П2'}
                />
            </div>
            <div className={classes.Chart}>
                <UserChart
                    id={'chart-4'}
                    text={'Давление П1'}
                    textY={'Давление в П1'}
                />
            </div>
            <div className={classes.Chart}>
                <UserChart
                    id={'chart-5'}
                    text={'Давление П2'}
                    textY={'Давление в П2'}
                />
            </div>
            <div className={classes.Chart}>
                <UserChart
                    id={'chart-6'}
                    text={'t камеры П1'}
                    textY={'t в камере П1'}
                />
            </div>
            <div className={classes.Chart}>
                <UserChart
                    id={'chart-7'}
                    text={'t камеры П2'}
                    textY={'t в камере П2'}
                />
            </div>
        </div>
    )
}

export default Charts