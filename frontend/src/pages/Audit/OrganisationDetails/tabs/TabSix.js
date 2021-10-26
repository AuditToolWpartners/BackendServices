import React from 'react';
import { makeStyles } from '@material-ui/core';
import {StoreContext} from "../../constantStore";
import Selects from "../../../../components/Selects";
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

const TabSix = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {TextFields(classes.field, api.setSubjectRecords, api.subjectRecords,"How many data subject records do you keep within your technology platforms?", "secondary", "number")}
            {Selects("Do you store health records?", classes.label, api.setHealthRecords, api.healthRecords, true, "secondary", api.setHealthRecordsScore)}
            {Selects("Do you process payments?", classes.label, api.setProcessPayments, api.processPayments, true, "secondary", api.setProcessPaymentsScore)}
        </form>
    );
}

export default TabSix;