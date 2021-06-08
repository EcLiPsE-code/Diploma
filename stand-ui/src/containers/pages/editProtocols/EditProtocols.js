import React, {useEffect} from 'react'
import classes from './editProtocols.module.css'
import EditProtocolsTable from '../../../components/UI/table/edit/editProtocolsTable'
import {
    addProtocol,
    cancelChanges, deleteProtocols,
    editProtocol,
    loadProtocols, saveChanges
} from '../../../store/actionCreators/editProtocolsAction'
import {connect} from 'react-redux'
import {CircularProgress} from '@material-ui/core'

/**
 * Компонент, который используется для редактирования
 * протоколов программ испытаний
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const EditProtocols = props => {

    useEffect(() => {
        props.loadingProtocols()
    }, [])

    return (
        <div className={classes.EditProtocolsWrapper}>
            {
                props.isLoading?
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%'
                        }}
                    >
                        <CircularProgress />
                    </div>
                    :
                    <EditProtocolsTable
                        protocols={props.protocols}
                        editProtocol={props.editProtocolHandler}
                        saveChanges={props.saveChangesHandler}
                        cancelChanges={props.cancelChangesHandler}
                        addProtocol={props.addProtocolHandler}
                        deleteProtocols={props.deleteProtocolsHandler}
                    />
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        protocols: state.editProtocolsReducer.protocols,
        isLoading: state.editProtocolsReducer.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadingProtocols: () => dispatch(loadProtocols()),
        editProtocolHandler: id => dispatch(editProtocol(id)),
        saveChangesHandler: methodology => dispatch(saveChanges(methodology)),
        cancelChangesHandler: id => dispatch(cancelChanges(id)),
        addProtocolHandler: name => dispatch(addProtocol(name)),
        deleteProtocolsHandler: ids => dispatch(deleteProtocols(ids))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProtocols)