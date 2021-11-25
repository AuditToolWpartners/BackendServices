import React from 'react';

// Components from MUI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import handleScore from "../utils/handleScore";

const Selects = (text, className, setVariable, defaultValueVar, fullWidth, color, setCategoryScore) => {

    const handleChange = (value) => {
        setVariable(value)

        handleScore(value, setCategoryScore)//TODO: add nist scoring
    }

    return (
        <>
                <InputLabel id="inputLabel" className={className}>{text}</InputLabel>
                <Select
                    onChange={(e => handleChange(e.target.value))}
                    labelId="inputLabel"
                    defaultValue={defaultValueVar}
                    fullWidth={true}
                    color={color}
                    variant="outlined"
                >
                    <MenuItem value="yes">Yes - Please provide more details.</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                    <MenuItem value="pns">Prefer not to say</MenuItem>
                </Select>
        </>
    )
}

export default Selects;