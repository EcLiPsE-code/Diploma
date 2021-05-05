import React from 'react'
import classes from './currentAccidents.module.css'
import Button from '@material-ui/core/Button';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';

const CurrentAccidents = props => {
    return (
        <div className={classes.CurrentAccidents}>
            <div className={classes.Title}>
                <span style={{
                    fontSize: '1.4rem'
                }}>Текущие аварии</span>
            </div>
            <div className={classes.Icons}>
                <div>
                    <span>
                        <InfoIcon/>
                    </span>
                    <span>一</span>
                </div>
                <div>
                    <span><WarningIcon/></span>
                    <span>一</span>
                </div>
                <div>
                    <span><ErrorIcon/></span>
                    <span>一</span>
                </div>
            </div>
            <div className={classes.Buttons}>
                <Button
                    variant="contained"
                    style={{
                        width: '90%',
                        backgroundColor: '#c79121',
                        color: '#fff',
                    }}>
                    Сбросить аварии
                </Button>
            </div>
        </div>
    )
}

export default CurrentAccidents