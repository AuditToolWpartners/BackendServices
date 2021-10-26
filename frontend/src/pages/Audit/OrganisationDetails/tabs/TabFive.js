import React from 'react';
import { makeStyles } from '@material-ui/core';
import {StoreContext} from "../../constantStore";
import Selects from "../../../../components/Selects";

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

const TabFive = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Selects("Do you develop software for customers?", classes.label, api.setDevSoftware, api.devSoftware, true, "secondary", api.setDevSoftwareScore)}
            {Selects("Do you provide managed services for customers?", classes.label, api.setManagedServices, api.managedServices, true, "secondary", api.setManagedServicesScore)}
            {Selects("Do you provide hosting services for customers?", classes.label, api.setHostingServices, api.hostingServices, true, "secondary", api.setHostingServicesScore)}
        </form>
    );
}

export default TabFive;