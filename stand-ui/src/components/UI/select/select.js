import React from 'react'
import Auxiliary from '../../../hoc/auxiliary/auxiliary'
import {FormControl, InputLabel, MenuItem, Select} from '@material-ui/core'

/**
 * Компонент, котоырй используется для создания
 * кастомного Select
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const UserSelect = props => {
    const [value, setValue] = React.useState('')

    const handleChange = event => {
        setValue(event.target.value)
    }

    return (
        <Auxiliary>
            <FormControl variant="outlined" size={'small'}>
                <InputLabel
                    id="demo-simple-select-outlined-label"
                >
                    {props.title}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={value}
                    onChange={event => handleChange(event)}
                    label={props.title}
                    style={props.style}
                    disabled={props.disabledType}
                >
                    {
                        props.title === 'Методология'?
                            props.methodologysArr.map(item => {
                                return (
                                    <MenuItem
                                        value={item.name}
                                        onClick={() => props.onChange(props.keyPosition, props.keyInput, item.name)}
                                    >
                                        {item.name}
                                    </MenuItem>
                                )
                            })
                            :
                            props.protocolsArr.map(item => {
                                return (
                                    <MenuItem
                                        value={item.name}
                                        onClick={() => props.onChange(props.keyPosition, props.keyInput, item.name)}
                                    >
                                        {item.name}
                                    </MenuItem>
                                )
                            })
                    }
                </Select>
            </FormControl>
        </Auxiliary>
    )
}

export default UserSelect