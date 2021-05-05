import React from 'react'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const UserCalendar = props => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                clearable
                value={null}
                placeholder="Выберите дату"
                onChange={date => props.onChange(date)}
                minDate={props.minDate}
                format="MM/dd/yyyy"
                style={{
                    width: '80%'
                }}
            />
        </MuiPickersUtilsProvider>
    )
}

export default UserCalendar