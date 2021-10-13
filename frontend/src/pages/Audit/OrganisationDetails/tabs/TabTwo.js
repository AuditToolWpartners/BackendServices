import React from 'react';
import { makeStyles } from '@material-ui/core';
import SelectsCustom from "../../../../components/SelectsCustom";
import {StoreContext} from "../../constantStore";
import TextFields from "../../../../components/TextFields";

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

const TabTwo = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {SelectsCustom("Company Size", classes.label, api.setComSize, true, "secondary", "small", "medium", "large", "Small", "Medium", "Large")}
            {TextFields(classes.field, api.setEmployees, "Number of Employees", "secondary", "number", true, "placeholder", true)}
            {TextFields(classes.field, api.setContractors, "Number of Contractors / Associates", "secondary", "number", true, "placeholder", true)}
            {TextFields(classes.field, api.setRegion, "Regions which you operate", "secondary", "text", true, "placeholder", true)}
        </form>
    );
}

export default TabTwo;