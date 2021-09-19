import React from 'react';

// Components from MUI
import TextField from '@material-ui/core/TextField';

// Transitions from MUI
import Grow from '@material-ui/core/Grow';

const TextFields = (id, name, label, formikValues,formikHandleChange, formikError, formikHelper, style, type) => {
    return (
        <Grow in="true">
        <TextField
            fullWidth
            id={id}
            name={name}
            label={label}
            value={formikValues}
            onChange={formikHandleChange}
            error={formikError}
            helperText={formikHelper}
            className={style}
            variant="outlined"
            color="secondary"
            type={type}
            required
            InputLabelProps={{shrink: true}}
        />
        </Grow>
    )
}

export default TextFields;