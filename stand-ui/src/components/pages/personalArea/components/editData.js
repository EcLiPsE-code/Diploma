import React, {useEffect} from 'react'
import classes from '../css/editUsername.module.css'
import Input from "../../../UI/input/input";
import {Button} from "@material-ui/core";

const EditData = props => {

    const clsEdit = []
    const clsSave = []
    const {label, labelEdit, state, onClick, onChange} = props

    if (!state.booleanLabel){
        clsEdit.slice(0, 1)
        clsSave.push(classes.dataHidden)
    }
    else{
        clsEdit.push(classes.dataHidden)
        clsSave.slice(0, 1)
    }

    return (
        <div className={classes.EditUserName}>
            <div>
                <span style={{display: 'flex', alignItems: 'center', }}>
                    <strong>{labelEdit}:&nbsp;</strong>
                </span>
                <span className={clsSave.join(' ')}>
                    <Input
                        label={label}
                        defaultValue={state.dataLabel}
                        variant={'outlined'}
                        onChange={onChange}
                    />
                </span>
                <span style={{paddingLeft: '2vmin'}}>
                    {state.dataLabel}
                </span>
            </div>
            <div style={{marginRight: '2vmin'}}>
                <span className={clsEdit.join(' ')}>
                    <Button
                        variant='outlined'
                        onClick={event => onClick(event)}
                    >
                        Редактировать
                    </Button>
                </span>
                <span className={clsSave.join(' ')} style={{marginLeft: '2vmin'}}>
                    <Button
                        variant='outlined'
                    >
                        Сохранить
                    </Button>
                </span>
                <span className={clsSave.join(' ')} style={{marginLeft: '2vmin'}}>
                    <Button
                        variant='outlined'
                        onClick={event => onClick(event)}
                    >
                        Назад
                    </Button>
                </span>
            </div>
        </div>
    )
}

export default EditData