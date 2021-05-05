import React from 'react'
import classes from './system.module.css'

const Info = props => {
    return (
        <div className={classes.Info}>
            <div className={classes.Title} style={{fontSize: '2.5vmin'}}>
                Система
            </div>
            <div className={classes.Mode}>
                <span>Режим:</span>
                <span style={{
                    padding: '.8vmin',
                    borderRadius: '.4vmin',
                    color: '#fff',
                    backgroundColor: '#356e35',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>Автомат.</span>
            </div>
            <div className={classes.Server}>
                <span>Сервер:</span>
                <span style={{
                    padding: '.8vmin',
                    borderRadius: '.4vmin',
                    color: '#fff',
                    backgroundColor: '#356e35',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>Вкл.</span>
            </div>
            <div className={classes.Condition}>
                <span>Состояние</span>
                <span style={{
                    padding: '.8vmin',
                    borderRadius: '.4vmin',
                    color: '#fff',
                    backgroundColor: '#a90329',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>Не запущено</span>
            </div>
        </div>
    )
};

export default Info