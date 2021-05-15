import React, {useMemo, useState} from 'react'
import classes from './personalArea.module.css'
import {Avatar, Button} from "@material-ui/core"
import EditData from "../../../components/pages/personalArea/components/editData"
import {connect} from 'react-redux'
import AccountData from "../../../components/UI/dialog/changeAccountData";

const PersonalArea = props => {

    const [account, setAccount] = useState(false)

    const accountOpen = () => setAccount(true)
    const accountClose = () => setAccount(false)

    return (
        <div>
            <AccountData
                open={account}
                handleClickClose={accountClose}
            />
            <div className={classes.PersonalAreaWrapper}>
                <div className={classes.UserInfo}>
                    <span>
                        <Avatar style={{
                            height: '7vmin',
                            width: '7vmin',
                            fontSize: '3vmin',
                            backgroundColor: 'purple'
                        }}>
                            {`${props.name.charAt(0)}${props.surname.charAt(0)}`}
                        </Avatar>
                    </span>
                    <span>
                        <h2>
                            {`${props.name} ${props.surname} ${props.lastName}`}
                        </h2>
                    </span>
                </div>
                <div className={classes.EditUserInfo}>
                    <EditData
                        state={props.name}
                        labelEdit={'Имя'}
                        label={'Имя'}
                    />
                    <EditData
                        state={props.surname}
                        labelEdit={'Фамилия'}
                        label={'Фамилия'}
                    />
                    <EditData
                        state={props.lastName}
                        labelEdit={'Отчество'}
                        label={'Отчество'}
                    />
                    <EditData
                        state={props.phone}
                        labelEdit={'Телефон'}
                        label={'Мобильный телефон'}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Button
                        variant={'contained'}
                        style={{
                            backgroundColor: '#356e35',
                            color: '#fff'
                        }}
                        onClick={() => accountOpen()}
                    >
                        Изменить данные об аккаунте
                    </Button>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        name: state.personalAreaReducer.name,
        surname: state.personalAreaReducer.surname,
        lastName: state.personalAreaReducer.lastName,
        phone: state.personalAreaReducer.phone,
        email: state.personalAreaReducer.email,
        password: state.personalAreaReducer.password
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea)