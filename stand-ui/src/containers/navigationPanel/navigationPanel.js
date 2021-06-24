import React, {useEffect, useState} from 'react'
import Auxiliary from '../../hoc/auxiliary/auxiliary'
import Header from '../../components/header/header'
import Sidebar from '../../components/sideBar/sideBar'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SignIn from "../../components/UI/dialog/signIIn"
import {connect} from 'react-redux'
import {logout, signIn} from "../../store/actionCreators/usersAction";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLink} from "react-router-dom";

/**
 * Компонент, который формирует шапку страницы, а также
 * содержит кнопку для авторизации и выхода из системы
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const NavigationPanel = props => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [signInDialog, setSignInDialog] = useState(false)
    const [state, setState] = useState({
        left: false
    })

    useEffect(() => {
        console.log('TOKEN:', props.token)
    }, [props.token])

    const open = Boolean(anchorEl)

    const signInDialogOpen = () => setSignInDialog(true)
    const signInDialogClose = () => setSignInDialog(false)

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleSignInClose = () => {
        signInDialogOpen()
        setAnchorEl(null)
    };

    const handleClose = () => {
        setAnchorEl(null)
    }

    const toggleDrawer = open => {
        setState({ ...state, left: open });
    }

    const changeDrawer = () => {
        setState(
            {
                ...state,
                left: !state.left
            }
        )
    }

    return (
        <Auxiliary>
            <SignIn
                open={signInDialog}
                handleClickOpen={signInDialogOpen}
                handleClickClose={signInDialogClose}
                signInHandler={props.signInHandler}
            />
            <Header
                anchorElParam = {anchorEl}
                handleMenu = {handleMenu}
                handleClose = {handleClose}
                open = {open}
                onOpen = {changeDrawer}
            />
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
            >
                {
                    props.token?
                        <NavLink key={'asd'} style={{
                            width: '100%',
                            display: 'flex',
                            position: 'relative',
                            boxSizing: 'border-box',
                            textAlign: 'left',
                            alignItems: 'center',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                            justifyContent: 'flex-start',
                            textDecoration: 'none',
                            color: 'black'
                        }} to={'/'}>
                            <MenuItem onClick={() => props.logout()}>
                                Выйти
                            </MenuItem>
                        </NavLink>
                        :
                        <MenuItem onClick={() => handleSignInClose()}>Войти</MenuItem>
                }
            </Menu>
            <Sidebar
                toggleDrawer = {toggleDrawer}
                open = {state.left}
            />
        </Auxiliary>
    )
}

function mapStateToProps(state){
    return {
        token: state.usersReducer.token
    }
}

function mapDispatchToProps(dispatch){
    return {
        signInHandler: (email, password) => dispatch(signIn(email, password)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationPanel)