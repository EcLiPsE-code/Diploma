import React, {useState} from 'react'
import 'date-fns'
import classes from './protocols.module.css'
import Input from "../../../components/UI/input/input"
import {Button, Menu, MenuItem} from '@material-ui/core'
import ProtocolsTable from '../../../components/UI/table/protocols/protocolsTable'
import UserCalendar from '../../../components/UI/calendar/calender'
import SettingsIcon from '@material-ui/icons/Settings'
import Auxiliary from '../../../hoc/auxiliary/auxiliary'

const Protocols = props => {

    const [selectedBeginDate, setSelectedBeginDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null)
    const [settings, setSettings] = useState(null)

    const settingsOpenHandler = event => setSettings(event.currentTarget)
    const settingsCloseHandler = () => setSettings(null)

    const handleBeginDateChange = date => setSelectedBeginDate(date)
    const handleEndDateChange = date => setSelectedEndDate(date)

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
                                >
                                    Поиск
                                </Button>
                            </span>
                            <span>
                                <Input
                                    label={'Программа'}
                                    defaultValue={'Программа'}
                                    variant={'outlined'}
                                />
                            </span>
                            <span style={{
                                marginLeft: '2vmin'
                            }}>
                                <UserCalendar
                                    onChange={handleBeginDateChange}
                                    minDate={new Date()}
                                    value={selectedBeginDate}
                                />
                            </span>
                            <span>
                                <UserCalendar
                                    onChange={handleEndDateChange}
                                    minDate={new Date(+(new Date()) + 3600 * 24 * 1000)}
                                    value={selectedEndDate}
                                />
                            </span>
                        </div>
                        <div className={classes.ProtocolBodyTable}>
                            <ProtocolsTable/>
                        </div>
                    </div>
                </div>
                <div className={classes.ProtocolsData}>
                    <div className={classes.Title}>
                        <strong>Данные по протоколу</strong>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </Auxiliary>
    )
}

export default Protocols