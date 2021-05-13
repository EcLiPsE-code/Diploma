import React from 'react'
import classes from './system.module.css'

const Info = props => {

    const styleMode = {
        backgroundColor: props.mode? '#356e35' : '#a90329'
    }
    const styleServer = {
        backgroundColor: props.server? '#356e35' : '#a90329'
    }
    const styleCondition = {
        backgroundColor: props.stateSystem? '#356e35' : '#a90329'
    }

    return (
        <div className={classes.Info}>
            <div className={classes.Title} style={{fontSize: '2.5vmin'}}>
                Система
            </div>
            <div className={classes.Mode}>
                <span>Режим:</span>
                <span style={styleMode} className={classes.ModeText}>
                    {props.mode? 'Автом.' : 'Ручн.'}
                </span>
            </div>
            <div className={classes.Server}>
                <span>Сервер:</span>
                <span style={styleServer} className={classes.ServerText}>
                    {props.server? 'Вкл.' : 'Выкл.'}
                </span>
            </div>
            <div className={classes.Condition}>
                <span>Состояние:</span>
                <span style={styleCondition} className={classes.ConditionText}>
                    {props.stateSystem? 'Вкл.' : 'Выкл.'}
                </span>
            </div>
        </div>
    )
};

export default Info