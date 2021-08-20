import React from 'react';

// Components from MUI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grow from '@material-ui/core/Grow';


const SelectsCustom = (text, className, setVariable, lsVariable, fullWidth, color, value1, value2, value3, value1Label, value2Label, value3Label) => {
    return (
        <>
            <Grow in="true">
            <InputLabel id="inputLabel" className={className}>{text}</InputLabel>
            </Grow>
            <Grow in="true">
            <Select
                onChange={(e => setVariable(e.target.value))}
                labelId="inputLabel"
                defaultValue={localStorage.getItem(lsVariable)}
                fullWidth={fullWidth}
                color={color}
                variant="outlined"
            >
            <MenuItem value={value1}>{value1Label}</MenuItem>
            <MenuItem value={value2}>{value2Label}</MenuItem>
            <MenuItem value={value3}>{value3Label}</MenuItem>
            </Select>
            </Grow>
        </>
    )
}

export default SelectsCustom;