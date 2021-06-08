import React, {useState} from 'react'
import classes from '../css/editUsername.module.css'
import Input from "../../../UI/input/input";
import {Button} from "@material-ui/core";

/**
 * Компонент UI, который используется для ввода и редактирования личной информации
 * каждого сотрудника
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const EditData = props => {

    const [state, setState] = useState(false)
    
    return (
        <div className={classes.EditUserName}>
            <div>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '3vmin'
                }}>
                    <strong>{props.labelEdit}:&nbsp;</strong>
                </span>
                {
                    state?
                        <span>
                            <Input
                                label={props.label}
                                defaultValue={props.state}
                                variant={'outlined'}
                            />
                        </span> :
                        <span style={{
                            paddingLeft: '2vmin',
                            fontSize: '2.5vmin'
                        }}>
                            {props.state}
                        </span>
                }
            </div>
            <div style={{marginRight: '2vmin'}}>
                {
                    state?
                        <div>
                            <span style={{marginLeft: '2vmin'}}>
                                <Button
                                    variant='outlined'
                                >
                                    Применить
                                </Button>
                            </span>
                            <span style={{marginLeft: '2vmin'}}>
                                <Button
                                    variant='outlined'
                                    onClick={() => setState(prev => !prev)}
                                >
                                    Назад
                                </Button>
                            </span>
                        </div> :
                        <span>
                            <Button
                                variant='outlined'
                                onClick={() => setState(prev => !prev)}
                            >
                                Редактировать
                            </Button>
                        </span>
                }
            </div>
        </div>
    )
}

export default EditData