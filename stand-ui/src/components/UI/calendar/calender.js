import React from 'react'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

/**
 * Компонент, который используется для создания
 * кастомизированного календаря для выбора даты
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const UserCalendar = props => {

    const style = {
        width: '80%'
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                clearable
                value={props.value}
                placeholder="Выберите дату"
                onChange={date => props.onChange(date)}
                minDate={props.minDate}
                format="MM/dd/yyyy"
                style={props.style? props.style : style}
            />
        </MuiPickersUtilsProvider>
    )
}

export default UserCalendar