import React from 'react'
import TextField from '@material-ui/core/TextField';
import Auxiliary from "../../../hoc/auxiliary/auxiliary";

const Input = props =>{

    const {label, defaultValue, type, variant, onChange, disabledType} = props

    return (
        <Auxiliary>
            <TextField
                label={label}
                defaultValue={defaultValue}
                size="small"
                variant={variant? variant : 'filled'}
                type={type}
                disabled={disabledType}
                onChange={onChange? event => onChange(event) : null}
            />
        </Auxiliary>
    )
}

export default Input