import React, {useState} from 'react'
import Auxiliary from '../../hoc/auxiliary/auxiliary'
import Header from '../../components/header/header'
import Sidebar from '../../components/sideBar/sideBar'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import FormDialog from '../../components/UI/dialog/signIIn'

const NavigationPanel = props => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [signInDialog, setSignInDialog] = useState(false)
    const [state, setState] = useState({
        left: false
    })

    const open = Boolean(anchorEl);

    const signInDialogOpen = () => setSignInDialog(true)
    const signInDialogClose = () => setSignInDialog(false)

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        signInDialogOpen()
        setAnchorEl(null);
    };

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
            <FormDialog
                open={signInDialog}
                handleClickOpen={signInDialogOpen}
                handleClickClose={signInDialogClose}
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
                <MenuItem onClick={() => handleClose()}>Войти</MenuItem>
                <MenuItem onClick={() => handleClose()}>Зарегестрироваться</MenuItem>
            </Menu>
            <Sidebar
                toggleDrawer = {toggleDrawer}
                open = {state.left}
            />
        </Auxiliary>
    )
}

export default NavigationPanel