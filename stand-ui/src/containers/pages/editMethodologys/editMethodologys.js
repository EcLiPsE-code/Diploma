import React, {useEffect} from 'react'
import classes from './editMethodologys.module.css'
import EditMethodologysTable from '../../../components/UI/table/edit/editMethodologyTable'
import {
    addMethodology,
    cancelChanges, deleteMethodology,
    editMethodology,
    loadMethodologys, saveChanges
} from '../../../store/actionCreators/editMethodologysAction'
import {connect} from 'react-redux'
import {CircularProgress} from '@material-ui/core'

/**
 * Компонент, который используется для редактирования
 * методологий программ испытаний
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const EditMethodology = props => {

    useEffect(() => {
        props.loadingMethodologys()
    }, [])

    return (
        <div className={classes.EditMethodologysWrapper}>
            {
                props.isLoading?
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <CircularProgress />
                    </div>
                    :
                    <EditMethodologysTable
                        methodologys={props.methodologys}
                        editMethodology={props.editMethodologyHandler}
                        saveChanges={props.saveChangesHandler}
                        cancelChanges={props.cancelChangesHandler}
                        addMethodology={props.addMethodologyHandler}
                        deleteMethodologys={props.deleteMethodologysHandler}
                    />
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        methodologys: state.editMethodologysReducer.methodologys,
        isLoading: state.editMethodologysReducer.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadingMethodologys: () => dispatch(loadMethodologys()),
        editMethodologyHandler: id => dispatch(editMethodology(id)),
        saveChangesHandler: methodology => dispatch(saveChanges(methodology)),
        cancelChangesHandler: id => dispatch(cancelChanges(id)),
        addMethodologyHandler: name => dispatch(addMethodology(name)),
        deleteMethodologysHandler: ids => dispatch(deleteMethodology(ids))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMethodology)