import React from 'react';

// Components from MUI
import TextField from '@material-ui/core/TextField';

// Transitions from MUI
import Grow from '@material-ui/core/Grow';

const ConditionalText = (condition, looking, style, setVariable, required, variableError, lsVariable) => {
    if (condition === looking) {
        return (
            <Grow in={true}>
                <TextField
                    onChange={(e) => setVariable(e.target.value)}
                    className={style}
                    label="Provide more info."
                    variant="outlined"
                    type="date"
                    fullWidth
                    multiline
                    rows={4}
                    required={true}
                    error={variableError}
                    defaultValue={localStorage.getItem(lsVariable)}
                    InputLabelProps={{shrink: true}}
                />
            </Grow>
        )
    }
}

export default ConditionalText;