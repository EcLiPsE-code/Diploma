import React from 'react'
import NavigationPanel from "../containers/navigationPanel/navigationPanel"
import InfoPanel from "../containers/infoPanel/infoPanel";
import classes from './layout.module.css'

const Layout = props => {
    return (
        <div className={classes.Layout}>
            <div className={classes.NabBlock}>
                <NavigationPanel/>
                <InfoPanel/>
            </div>
            <div className={classes.BodyBlock}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout