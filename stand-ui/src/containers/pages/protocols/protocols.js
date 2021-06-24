import React, {useEffect, useState} from 'react'
import 'date-fns'
import classes from './protocols.module.css'
import Input from "../../../components/UI/input/input"
import {Button, CircularProgress, Menu, MenuItem, TextField} from '@material-ui/core'
import ProtocolsTable from '../../../components/UI/table/protocols/protocolsTable'
import UserCalendar from '../../../components/UI/calendar/calender'
import SettingsIcon from '@material-ui/icons/Settings'
import Auxiliary from '../../../hoc/auxiliary/auxiliary'
import {
    loadProtocols,
    setDateBegin,
    setDateEnd,
    setProgramName,
    filterData
} from '../../../store/actionCreators/protocolsAction'
import {connect} from 'react-redux'
import ReportTest from "../../../components/report/report";
import {generateDataTest} from "../../../helerps/generateReport";
import ReportTableTest from "../../../components/report/report";

/**
 * Компонент, который рендерит страницу "Протоколы"
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Protocols = props => {

    const [data, setData] = useState([])

    useEffect(() => {
        props.fetchLoadProtocols()
    }, [])

    const generateDataHandler = () => {
        const arr = generateDataTest()
        setData(arr)
    }

    return (
        <Auxiliary>
            <div className={classes.ProtocolWrapper}>
                <div className={classes.Protocols}>
                    <div className={classes.Title}>
                        <div>
                            <strong>Протоколы</strong>
                        </div>
                        <div>
                            <SettingsIcon />
                        </div>
                    </div>
                    <div className={classes.ProtocolTable}>
                        <div className={classes.StringSearch}>
                            <span>
                                <Button
                                    size='small'
                                    variant="contained"
                                    style={{
                                        backgroundColor: '#356e35',
                                        color: '#fff',
                                        padding: '1vmin 2vmin'
                                    }}
                                    onClick={() => props.filterDataHandler()}
                                >
                                    Поиск
                                </Button>
                            </span>
                            <span>
                                <TextField
                                    label={'Программа'}
                                    defaultValue={'Программа'}
                                    variant={'outlined'}
                                    size={'small'}
                                    onChange={event => props.setProgramName(event.currentTarget.value)}
                                />
                            </span>
                            <span style={{
                                marginLeft: '2vmin'
                            }}>
                                <UserCalendar
                                    onChange={date => props.setBeginDateHandler(date)}
                                    minDate={new Date()}
                                    value={props.selectedBeginDate}
                                />
                            </span>
                            <span>
                                <UserCalendar
                                    onChange={date => props.setDateEnd(date)}
                                    minDate={new Date(+(new Date()) + 3600 * 24 * 1000)}
                                    value={props.selectedEndDate}
                                />
                            </span>
                        </div>
                        <div>
                            {
                                props.isLoading?
                                    (
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: '40vh'
                                            }}
                                        >
                                            <CircularProgress />
                                        </div>
                                    )
                                    :
                                    <ProtocolsTable
                                        isLoading={props.isLoading}
                                        protocols={props.protocols}
                                        clickRow={generateDataHandler}
                                        rows={data}
                                    />
                            }
                        </div>
                    </div>
                </div>
                <div className={classes.ProtocolsData}>
                    <div className={classes.Title}>
                        <strong>Данные по протоколу</strong>
                    </div>
                    <div>
                        <ReportTableTest
                            rows={data}
                        />
                    </div>
                </div>
            </div>
        </Auxiliary>
    )
}

function mapStateToProps(state){
    return {
        selectedBeginDate: state.protocolsReducer.selectedBeginDate, //дата начала сортировки
        selectedEndDate: state.protocolsReducer.selectedEndDate, //дата окончания сортировки
        programName: state.protocolsReducer.programName,
        protocols: state.protocolsReducer.protocols, //массив протоколов испытаний
        isLoading: state.protocolsReducer.isLoading //загружены данные или нет
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchLoadProtocols: () => dispatch(loadProtocols()),
        setBeginDateHandler: date => dispatch(setDateBegin(date)),
        setDateEnd: date => dispatch(setDateEnd(date)),
        setProgramName: name => dispatch(setProgramName(name)),
        filterDataHandler: () => dispatch(filterData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Protocols)