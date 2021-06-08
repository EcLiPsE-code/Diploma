import React, {useEffect} from 'react'
import classes from './accidents.module.css'
import AccidentsTable from '../../../components/UI/table/accidents/accidentTable'
import Typography from '@material-ui/core/Typography'
import {
    loadAccidents
} from '../../../store/actionCreators/accidentsAction'
import {connect} from 'react-redux'
import {CircularProgress} from "@material-ui/core";

/**
 * Компонент, который рендерит страницу аварий
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Accidents = props => {

    useEffect(() => {
        props.loadingAccidents()
    }, [])

    return (
        <div className={classes.AccidentsWrapper}>
            <div  style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant='h6'>
                    ТАБЛИЦА АВАРИЙ
                </Typography>
            </div>
            <div className={classes.AccidentsTableBody}>
                {
                    props.isLoading?
                        <CircularProgress />
                        :
                        <AccidentsTable
                            accidents={props.accidents}
                        />
                }
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        accidents: state.accidentsReducer.accidents,
        isLoading: state.accidentsReducer.isLoading
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadingAccidents: () => dispatch(loadAccidents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accidents)