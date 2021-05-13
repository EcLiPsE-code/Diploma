import React, {useState} from 'react'
import Auxiliary from '../../hoc/auxiliary/auxiliary'
import Header from '../../components/header/header'
import Sidebar from '../../components/sideBar/sideBar'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import SignIn from "../../components/UI/dialog/signIIn";
import SignUp from "../../components/UI/dialog/signUp";

const NavigationPanel = props => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [signInDialog, setSignInDialog] = useState(false)
    const [signUpDialog, setSignUpDialog] = useState(false)
    const [state, setState] = useState({
        left: false
    })

    const open = Boolean(anchorEl);

    const signUpDialogOpen = () => setSignUpDialog(true)
    const signUpDialogClose = () => setSignUpDialog(false)

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

    const handleSignUpClose = () => {
        signUpDialogOpen()
        setAnchorEl(null)
    }

    const toggleDrawer = open => {
        setState({ ...state, left: open });
    };

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
            />
            <SignUp
                open={signUpDialog}
                handleClickOpen={signUpDialogOpen}
                handleClickClose={signUpDialogClose}
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
                <MenuItem onClick={() => handleSignInClose()}>Войти</MenuItem>
                <MenuItem onClick={() => handleSignUpClose()}>Зарегестрироваться</MenuItem>
            </Menu>
            <Sidebar
                toggleDrawer = {toggleDrawer}
                open = {state.left}
            />
        </Auxiliary>
    )
}

export default NavigationPanel