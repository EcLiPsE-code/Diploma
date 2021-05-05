import React, {useState} from 'react'
import Auxiliary from "../../hoc/auxiliary/auxiliary";
import Header from "../../components/header/header";
import Sidebar from "../../components/sideBar/sideBar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const NavigationPanel = props => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [state, setState] = useState({
        left: false
    })

    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
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