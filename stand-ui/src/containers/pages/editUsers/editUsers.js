import React, {useEffect} from 'react'
import classes from './editUsers.module.css'
import {CircularProgress} from '@material-ui/core'
import EmployeesTable from '../../../components/UI/table/edit/editUserTable'
import {
    deleteUsers,
    loadEmployees,
    addUser, fireEmployee, changeRole
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
                        deleteUsers={props.deleteUsers}
                        addUser={props.addUser}
                        fireEmployee={props.fireEmployee}
                        changeRoleHandler={props.changeRoleHandler}
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
        loadingEmployees: () => dispatch(loadEmployees()),
        deleteUsers: ids => dispatch(deleteUsers(ids)),
        addUser: employee => dispatch(addUser(employee)),
        fireEmployee: employee => dispatch(fireEmployee(employee)),
        changeRoleHandler: employee => dispatch(changeRole(employee))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUsers)