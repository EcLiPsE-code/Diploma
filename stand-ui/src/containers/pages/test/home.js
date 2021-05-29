import React, {useCallback, useState} from 'react'
import classes from './home.module.css'
import Test from '../../../components/pages/home/test'
import Program from '../../../components/pages/home/programm'
import {connect} from 'react-redux'

const Home = props => {
    return (
        <div className={classes.HomeWrapper}>
            <div>
                <Test/>
            </div>
            <div style={{marginTop: '2vmin'}}>
                <Program/>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect()(Home)