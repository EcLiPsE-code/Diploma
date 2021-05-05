import React, {useEffect, useState} from 'react'
import {Menu, MenuItem} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Auxiliary from "../../../hoc/auxiliary/auxiliary";
import Button from "@material-ui/core/Button";

const UserMenu = props => {

    let id = undefined
    let menuItem = []

    useEffect(() => {
        let {id, menuItem} = props
        console.log(menuItem)
    }, [props])

    const [state, setState] = useState(null)

    const handleClick = event => setState(event.currentTarget)
    const handleClose = () => setState(null)

    return (
        <div>
            <Button
                variant="contained"
                size='small'
                color="secondary"
                style={{
                    backgroundColor: '#c79121',
                    color: '#fff'
                }}
                onClick={handleClick}
            >
                Шаблон
            </Button>
            <Menu
                id={id}
                anchorEl={state}
                keepMounted
                open={Boolean(state)}
                onClose={handleClose}
            >
                {
                    menuItem?
                        menuItem.map((item, index) => {
                            return (
                                <MenuItem onClick={handleClose} key={index}>
                                    {item.icon}
                                    <span>
                                    {item.text}
                                </span>
                                </MenuItem>
                            )
                        })
                        :
                        null
                }
            </Menu>
        </div>
    )
}

export default UserMenu