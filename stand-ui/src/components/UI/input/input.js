import React from 'react'
import TextField from '@material-ui/core/TextField';
import Auxiliary from "../../../hoc/auxiliary/auxiliary";

/**
 * Компонент, который используется для создания
 * кастомного Input
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Input = props =>{

    const {label,
        defaultValue,
        type,
        variant,
        onChange,
        disabledType,
        keyInput,
        keyPosition
    } = props

    return (
        <Auxiliary>
            <TextField
                label={label}
                defaultValue={defaultValue}
                size="small"
                variant={variant? variant : 'filled'}
                type={type}
                disabled={disabledType}
                onChange={onChange? event => onChange(keyPosition, keyInput, event.currentTarget.value) : null}
            />
        </Auxiliary>
    )
}

export default Input