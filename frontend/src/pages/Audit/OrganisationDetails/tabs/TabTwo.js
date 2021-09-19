import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';

// MUI Components
import Grow from '@material-ui/core/Grow'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// Local Components
import ConditionalText from '../../../../components/ConditionalText';
import TextFields from '../../../../components/TextFields';

const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
    },
    fields: {
      marginTop: 20,
    },
    bttn: {
      margin: 10
    },
    label: {
      marginTop: 20,
      fontSize: 14,
      textAlign: 'left',
      paddingLeft: 14
    },
})

  const setLS = (value, hook) => (
    localStorage.setItem(value, hook)
  );
  
  const getLS = (value) => (
    localStorage.getItem(value)
  );

const TabTwo = () => {
    const classes = useStyles;

    const [companySize, setCompanySize] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        

    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grow in="true">
                <div>
                    <InputLabel id="companySizeL" className={classes.label}>Company Size</InputLabel>
                    <Select
                        onChange={(e => setCompanySize(e.target.value))}
                        labelId="companySizeL"
                        defaultValue={localStorage.getItem("companySize")}
                        fullWidth="true"
                        color="secondary"
                        variant="outlined"
                    >
                        <MenuItem value={"micro"}>Micro</MenuItem>
                        <MenuItem value={"small"}>Small</MenuItem>
                        <MenuItem value={"medium"}>Medium</MenuItem>
                        <MenuItem value={"large"}>Large</MenuItem>
                    </Select>
                </div>
            </Grow>

        </form>

    );
}

export default TabTwo;