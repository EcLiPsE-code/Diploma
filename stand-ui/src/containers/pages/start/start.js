import React from 'react'
import classes from './start.module.css'

const StartPage = props => {
    return (
        <div className={classes.StartPageWrapper}>
            <div className={classes.StartPageInner}>
                <div className={classes.Title}>
                    Автоматизированная система стенда для
                    динамических испытаний легковых шин
                    ОАО "БЕЛШИНА"
                </div>
                <div className={classes.Body}>
                    
                </div>
            </div>
        </div>
    )
}

export default StartPage