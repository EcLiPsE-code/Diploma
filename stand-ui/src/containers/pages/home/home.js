import React, {useState} from 'react'
import classes from './home.module.css'
import Test from "../../../components/pages/home/test";
import Program from "../../../components/pages/home/programm";

const Home = props => {

    const [program, setProgram] = useState(null)
    const [template, setTemplate] = useState(null)

    const handleProgramClick = event => setProgram(event.currentTarget)

    const handleTemplateClick = event => setTemplate(event.currentTarget)

    const handleProgramClose = () => setProgram(null)

    const handleTemplateClose = () => setTemplate(null)

    return (
        <div className={classes.HomeWrapper}>
            <div className={classes.HomeInner}>
                <div>
                    <Test/>
                </div>
                <div>
                    <Program
                        programClick = {handleProgramClick}
                        templateClick = {handleTemplateClick}
                        programClose =  {handleProgramClose}
                        templateClose = {handleTemplateClose}
                        program = {program}
                        template = {template}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home