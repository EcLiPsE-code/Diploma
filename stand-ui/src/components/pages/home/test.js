import React, {useCallback, useState} from 'react'
import classes from './css/test.module.css'
import TypeTest from './components/test/typeTest/typeTest'
import DataTest from './components/test/dataTest/dataTest'
import {connect} from 'react-redux'

/**
 * Компонент, который нужен для рендеринга формы, которая используется для
 * ввода данных на каждой позиции во время проведения испытания
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Test = props => {

    const [state, setState] = useState(false)
    const [data, setData] = useState({
        protocol: null,
        model: null,
        size: null,
        number: null,
        rDin: null,
        methodology: null
    })

    const onClickHandler = useCallback(() => {
        setState(prev => !prev)
    }, [state])

    const changeDataHandler = (event, key) => {
        setData({
            ...data,
            [key] : event.currentTarget.value
        })
        props.keyPosition === 'pos1'? props.setDataTestPos1Handler(data) : props.setDataTestPos2Handler(data)
    }

    return (
        <div className={classes.Test}>
            <div className={classes.Title}>
                <TypeTest
                    state={state}
                    onClick={onClickHandler}
                    setTypeTest={props.setTypeTestHandler}
                />
            </div>
            <div className={classes.HeadData}>
                <DataTest
                    methodologys={props.methodologys}
                    protocols={props.protocols}
                    text={'Поз.1'}
                    keyPosition={'pos1'}
                    setDataTestPos1Handler={props.setDataTestPos1Handler}
                    setDataTestPos2Handler={props.setDataTestPos2Handler}
                />
            </div>
            <div className={classes.HeadData}>
                <DataTest
                    methodologys={props.methodologys}
                    protocols={props.protocols}
                    text={'Поз.2'}
                    state={state}
                    keyPosition={'pos2'}
                    setDataTestPos1Handler={props.setDataTestPos1Handler}
                    setDataTestPos2Handler={props.setDataTestPos2Handler}
                />
            </div>
        </div>
    )
}

export default Test