import React from 'react'
import classes from './css/test.module.css'
import Tester from "./components/test/tester/tester"
import TypeTest from "./components/test/typeTest/typeTest"
import DataTest from "./components/test/dataTest/dataTest";

const Test = props => {
    return (
        <div className={classes.Test}>
            <div className={classes.Title}>
                <Tester/>
                <TypeTest/>
            </div>
            <div className={classes.HeadData}>
                <DataTest/>
            </div>
            <div className={classes.HeadData}>
                <DataTest/>
            </div>
        </div>
    )
}

export default Test