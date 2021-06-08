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
    const [age, setAge] = React.useState('')

    const handleChange = (event) => {
        setAge(event.target.value)
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
                    value={age}
                    onChange={handleChange}
                    label={props.title}
                    style={props.style}
                    disabled={props.disabledType}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    {
                        props.title === 'Методология'?
                            props.methodologysArr.map(item => {
                                return (
                                    <MenuItem value={item.name}>{item.name}</MenuItem>
                                )
                            })
                            :
                            props.protocolsArr.map(item => {
                                return (
                                    <MenuItem value={item.name}>{item.name}</MenuItem>
                                )
                            })
                    }
                </Select>
            </FormControl>
        </Auxiliary>
    )
}

export default UserSelect