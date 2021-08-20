import React from 'react';

// Components from MUI
import Button from '@material-ui/core/Button';

const Buttons = (handleFunction, className, color, icon, text) => {
    return (
        <Button
        onClick={handleFunction}
        className={className}
        color={color}
        variant="contained"
        endIcon={icon}
      >
        {text}
      </Button>
    )
}

export default Buttons;