import React from 'react'
import classes from './accidents.module.css'
import AccidentsTable from "../../../components/UI/table/accidents/accidentTable";
import Typography from "@material-ui/core/Typography";
import ProgramTable from "../../../components/UI/table/programm/programTable";

const Accidents = props => {
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
            <div style={{backgroundColor: 'red'}}>
                <AccidentsTable/>
            </div>
        </div>
    )
}

export default Accidents