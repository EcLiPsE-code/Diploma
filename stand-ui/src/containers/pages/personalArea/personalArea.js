import React, {useState} from 'react'
import classes from './personalArea.module.css'
import {Avatar} from "@material-ui/core"
import EditData from "../../../components/pages/personalArea/components/editData"

const PersonalArea = props => {

    const [name, setName] = useState({
        booleanLabel: false,
        dataLabel: 'Евгений'
    })
    const [surname, setSurname] = useState({
        booleanLabel: false,
        dataLabel: 'Трофимов'
    })
    const [lastName, setLastName] = useState({
        booleanLabel: false,
        dataLabel: 'Владимирович'
    })
    const [phone, setPhone] = useState({
        booleanLabel: false,
        dataLabel: '+375336825667'
    })

    const handlerClickName = event => {
        setName({
            ...name,
            booleanLabel: !name.booleanLabel
        })
    }

    const handlerOnchangeName = event => {
        setName({
            ...name,
            dataLabel: event.currentTarget.value
        })
    }

    const handlerClickSurname = () => {
        setSurname({
            ...surname,
            booleanLabel: !surname.booleanLabel
        })
    }
    const handlerOnchangeSurname = event => {
        setSurname({
            ...surname,
            dataLabel: event.currentTarget.value
        })
    }
    const handlerClickLastName = () => {
        setLastName({
            ...lastName,
            booleanLabel: !lastName.booleanLabel
        })
    }
    const handlerOnchangeLastName = event => {
        setLastName({
            ...lastName,
            dataLabel: event.currentTarget.value
        })
    }
    const handlerClickPhone = () => {
        setPhone({
            ...phone,
            booleanLabel: !phone.booleanLabel
        })
    }
    const handlerOnchangePhone = event => {
        setPhone({
            ...phone,
            dataLabel: event.currentTarget.value
        })
    }
    return (
        <div>
            <div className={classes.PersonalAreaWrapper}>
                <div className={classes.UserInfo}>
                    <span>
                        <Avatar style={{
                            height: '7vmin',
                            width: '7vmin',
                            fontSize: '3vmin',
                            backgroundColor: 'purple'
                        }}>
                        ЕВ
                    </Avatar>
                    </span>
                    <span>
                        <h2>Трофимов Евгений Владимирович</h2>
                    </span>
                </div>
                <div className={classes.EditUserInfo}>
                    <EditData
                        state={name}
                        labelEdit={'Имя'}
                        label={'Имя'}
                        onClick = {handlerClickName}
                        onChange={handlerOnchangeName}
                    />
                    <EditData
                        state={surname}
                        labelEdit={'Фамилия'}
                        label={'Фамилия'}
                        onClick={handlerClickSurname}
                        onChange={handlerOnchangeSurname}
                    />
                    <EditData
                        state={lastName}
                        labelEdit={'Отчество'}
                        label={'Отчество'}
                        onClick={handlerClickLastName}
                        onChange={handlerOnchangeLastName}
                    />
                    <EditData
                        state={phone}
                        labelEdit={'Телефон'}
                        label={'Мобильный телефон'}
                        onClick={handlerClickPhone}
                        onChange={handlerOnchangePhone}
                    />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default PersonalArea