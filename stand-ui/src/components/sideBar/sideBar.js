import React, {useState} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import WarningIcon from '@material-ui/icons/Warning'
import TimelineIcon from '@material-ui/icons/Timeline'
import PersonIcon from '@material-ui/icons/Person'
import BuildIcon from '@material-ui/icons/Build'
import EditIcon from '@material-ui/icons/Edit'
import GroupIcon from '@material-ui/icons/Group'
import EditAttributesIcon from '@material-ui/icons/EditAttributes'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import Auxiliary from '../../hoc/auxiliary/auxiliary'
import {Collapse, Divider, Drawer} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {ExpandLess, ExpandMore} from '@material-ui/icons'
import {connect} from 'react-redux'

/**
 * Компонент, который рендерит боковое выезжающее меню
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Sidebar = props => {

    const [open, setOpen] = useState(false)

    const clickHandler = () => {
        setOpen(prev => !prev)
    }

    const changeToggleDrawer = () => {
        if (open){
            setOpen(prev => !prev)
        }
        props.toggleDrawer(false)
    }

    const menu = [
        {
            id: 1,
            text: 'Испытания',
            icon: <HomeIcon/>,
            route: '/test',
        },
        {
            id: 2,
            text: 'Протоколы',
            icon: <LibraryBooksIcon/>,
            route: '/protocols',
        },
        {
            id: 3,
            text: 'Аварии',
            icon: <WarningIcon/>,
            route: '/accidents',
        },
        {
            id: 4,
            text: 'Графики',
            icon: <TimelineIcon/>,
            route: '/charts',
        },
        {
            id: 5,
            text: 'Личный кабинет',
            icon: <PersonIcon/>,
            route: '/personalArea'
        },
        {
            id: 6,
            text: 'Редактирование',
            icon: <EditIcon/>,
            menu: [
                {
                    id: 7,
                    text: 'Пользователи',
                    icon: <GroupIcon/>,
                    route: '/editUsers'
                },
                {
                    id: 8,
                    text: 'Протоколы',
                    icon: <EditAttributesIcon/>,
                    route: '/editProtocols',
                },
                {
                    id: 9,
                    text: 'Методологии',
                    icon: <CardGiftcardIcon/>,
                    route: '/editMethodologys',
                }
            ],
        }
    ]

    const list = () => (
            <List>
                <NavLink key={1} style={{
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
                    <ListItem button key={1} onClick={() => changeToggleDrawer()}>
                        <ListItemIcon><BuildIcon/></ListItemIcon>
                        <ListItemText primary={'Главная'} />
                    </ListItem>
                </NavLink>
                {
                    menu.map((menuItem, index) => {
                        return (
                            props.token?
                                menuItem.hasOwnProperty('menu')?
                                    props.employee.position === 'Администратор'?
                                        <Auxiliary key={index}>
                                            <ListItem button key={index} onClick={() => clickHandler()}>
                                                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                                <ListItemText primary={menuItem.text} />
                                                {open? <ExpandLess /> : <ExpandMore />}
                                            </ListItem>
                                            <Collapse in={open} timeout='auto' unmountOnExit>
                                                <List component='div' disablePadding>
                                                    {
                                                        menuItem.menu.map((item, item_index) => {
                                                            return (
                                                                <NavLink key={item_index} style={{
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
                                                                         to={item.route}>
                                                                    <ListItem button key={item_index} onClick={() => changeToggleDrawer()}>
                                                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                                                        <ListItemText primary={item.text} />
                                                                    </ListItem>
                                                                </NavLink>
                                                            )
                                                        })
                                                    }
                                                </List>
                                            </Collapse>
                                        </Auxiliary>
                                        :
                                        null
                                    :
                                    <NavLink key={index} style={{
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
                                    }} to={menuItem.route}>
                                        <ListItem button key={index} onClick={() => changeToggleDrawer()}>
                                            <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                            <ListItemText primary={menuItem.text} />
                                        </ListItem>
                                    </NavLink>
                                :
                                null
                        )
                    })
                }
            </List>
    )

    return (
        <Drawer
            anchor='left'
            open={props.open}
            onOpen={() => props.toggleDrawer(true)}
            onClose={() => changeToggleDrawer()}
        >
            {list()}
        </Drawer>
    );
};

function mapStateToProps(state){
    return {
        token: state.usersReducer.token,
        employee: state.usersReducer.user
    }
}

export default connect(mapStateToProps, null)(Sidebar)