import React, {useMemo, useState} from 'react'
import classes from './personalArea.module.css'
import {Avatar, Button} from "@material-ui/core"
import EditData from "../../../components/pages/personalArea/components/editData"
import {connect} from 'react-redux'
import AccountData from "../../../components/UI/dialog/changeAccountData";
import {changeDataUser} from "../../../store/actionCreators/usersAction";

/**
 * Компонент, который рендерит личную страницу каждого пользователя
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const PersonalArea = props => {

    const [account, setAccount] = useState(false)

    const accountOpen = () => setAccount(true)
    const accountClose = () => setAccount(false)

    return (
        <div style={{
            display: 'flex',
            margin: 'auto'
        }}
        >
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
                            {`${props.user.name.charAt(0)}${props.user.surname.charAt(0)}`}
                        </Avatar>
                    </span>
                    <span>
                        <h2>
                            {`${props.user.name} ${props.user.surname} ${props.user.lastName}`}
                        </h2>
                    </span>
                </div>
                <div className={classes.EditUserInfo}>
                    <EditData
                        state={props.user.name}
                        labelEdit={'Имя'}
                        label={'Имя'}
                        keyInput={'name'}
                        onChangeHandler={props.changeData}
                    />
                    <EditData
                        state={props.user.surname}
                        labelEdit={'Фамилия'}
                        label={'Фамилия'}
                        keyInput={'surname'}
                        onChangeHandler={props.changeData}
                    />
                    <EditData
                        state={props.user.lastName}
                        labelEdit={'Отчество'}
                        label={'Отчество'}
                        keyInput={'lastName'}
                        onChangeHandler={props.changeData}
                    />
                    <EditData
                        state={props.user.phone}
                        labelEdit={'Телефон'}
                        label={'Мобильный телефон'}
                        keyInput={'phone'}
                        onChangeHandler={props.changeData}
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
        user: state.usersReducer.user
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeData: (key, value) => dispatch(changeDataUser(key, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea)