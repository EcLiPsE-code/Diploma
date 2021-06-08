import React, {useEffect} from 'react'
import classes from './editUsers.module.css'
import {CircularProgress} from '@material-ui/core'
import EmployeesTable from '../../../components/UI/table/edit/editUserTable'
import {
    loadEmployees
} from '../../../store/actionCreators/usersAction'
import {connect} from 'react-redux'

/**
 * Компонент, используемый для редакктирования сотрудников
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const EditUsers = props => {

    useEffect(() => {
        props.loadingEmployees()
    }, [])

    return (
        <div className={classes.EditUsersTableWrapper}>
            {
                props.isLoading?
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%'
                    }}>
                        <CircularProgress />
                    </div>
                    :
                    <EmployeesTable
                        employees={props.users}
                    />
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        users: state.usersReducer.users,
        isLoading: state.usersReducer.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadingEmployees: () => dispatch(loadEmployees())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUsers)