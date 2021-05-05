import React from 'react'
import 'date-fns'
import classes from './protocols.module.css'
import Input from "../../../components/UI/input/input"
import {Button} from "@material-ui/core"
import ProtocolsTable from "../../../components/UI/table/protocols/protocolsTable"
import UserCalendar from "../../../components/UI/calendar/calender"

const Protocols = props => {

    const [selectedBeginDate, setSelectedBeginDate] = React.useState(null);
    const [selectedEndDate, setSelectedEndDate] = React.useState(null)

    const handleBeginDateChange = date => {
        setSelectedBeginDate(date)
    }

    const handleEndDateChange = date => {
        setSelectedEndDate(date)
    }

    return (
            <div className={classes.ProtocolWrapper}>
                <div className={classes.Protocols}>
                    <div className={classes.Title}>
                        <strong>Протоколы</strong>
                    </div>
                    <div className={classes.ProtocolTable}>
                        <div className={classes.StringSearch}>
                            <span>
                                <Button
                                    size='large'
                                    variant="contained"
                                    color="default"
                                  >
                                    Search
                                </Button>
                            </span>
                            <span>
                                <Input
                                    label={'Протокол'}
                                    defaultValue={'Протокол'}
                                    variant={'outlined'}
                                />
                            </span>
                            <span style={{
                                marginLeft: '2vmin'
                            }}>
                                <UserCalendar
                                    onChange={handleBeginDateChange}
                                    minDate={new Date()}
                                />
                            </span>
                            <span>
                                <UserCalendar
                                    onChange={handleEndDateChange}
                                    minDate={new Date(+(new Date()) + 3600 * 24 * 1000)}
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
    )
}

export default Protocols