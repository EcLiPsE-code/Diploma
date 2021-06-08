import React from 'react'
import classes from './tester.module.css'
import PersonIcon from "@material-ui/icons/Person"
import UserSelect from "../../../../../UI/select/select"

/**
 * Компонент, который нужен для отображения формы ввода информации об испытании
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Tester = props => {
    return (
        <div className={classes.Tester}>
            <div>
                <span>
                    <PersonIcon/>
                </span>
                <span style={{
                    fontSize: '2.1vmin',
                    color: '#fff',
                    marginLeft: '1.5vmin'
                }}>
                    Испытатель
                </span>
            </div>
            <div>
                <UserSelect style={{width: '10vw'}}/>
            </div>
        </div>
    )
}

export default Tester
