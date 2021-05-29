import React from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import classes from './header.module.css'

const Header = props => {

    return (
        <div className={classes.Header}>
            <div style={{marginLeft: '2vmin'}}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => props.onOpen()}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                    СТЕНД АВТОМАТИЗАЦИИ АВТОМОБИЛЬНЫХ ПОКРЫШЕК
                </Typography>
            </div>
            <div style={{marginRight: '2vmin'}}>
                {
                    (
                        <div>
                            <IconButton
                                onClick={event => props.handleMenu(event)}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header