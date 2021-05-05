import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import WarningIcon from '@material-ui/icons/Warning';
import TimelineIcon from '@material-ui/icons/Timeline';
import PersonIcon from '@material-ui/icons/Person';
import Auxiliary from "../../hoc/auxiliary/auxiliary";
import {Drawer} from "@material-ui/core";
import {NavLink} from 'react-router-dom'

const Sidebar = props => {

    const menu = [
        {
            id: 0,
            text: 'Испытания',
            icon: <HomeIcon/>,
            route: '/'
        },
        {
            id: 1,
            text: 'Протоколы',
            icon: <LibraryBooksIcon/>,
            route: '/protocols'
        },
        {
            id: 2,
            text: 'Аварии',
            icon: <WarningIcon/>,
            route: '/accidents'
        },
        {
            id: 3,
            text: 'Графики',
            icon: <TimelineIcon/>,
            route: '/charts'
        },
        {
            id: 4,
            text: 'Личный кабинет',
            icon: <PersonIcon/>,
            route: '/personalArea'
        }
    ]

    const list = () => (
        <div
            role="presentation"
            onClick={() => props.toggleDrawer(false)}
            onKeyDown={() => props.toggleDrawer(false)}
        >
            <List>
                {
                    menu.map((menuItem, index) => {
                        return (
                            <NavLink style={{
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
                            }}
                                     to={menuItem.route}>
                                <ListItem button key={index}>
                                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                    <ListItemText primary={menuItem.text} />
                                </ListItem>
                            </NavLink>
                        )
                    })
                }
            </List>
        </div>
    );

    return (
        <div>
            <Auxiliary>
                <Drawer
                    anchor='left'
                    open={props.open}
                    onOpen={() => props.toggleDrawer(true)}
                    onClose={() => props.toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </Auxiliary>
        </div>
    );
};

export default Sidebar