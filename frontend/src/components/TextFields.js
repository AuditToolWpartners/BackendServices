import React from 'react';

// Components from MUI
import TextField from '@material-ui/core/TextField';

// Transitions from MUI
import Grow from '@material-ui/core/Grow';

const TextFields = (style, setVariable, label, color, type, fullWidth, lsVariable) => {
    return (
        <Grow in={true}>
            <TextField
                onChange={(e) => setVariable(e.target.value)}
                className={style}
                label={label}
                variant="outlined"
                color={color}
                type={type}
                fullWidth={true}
                defaultValue={localStorage.getItem(lsVariable)}
                InputLabelProps={{shrink: true}}
            />
        </Grow>
    )
}

export default TextFields;