import React from 'react';
import { makeStyles } from '@material-ui/core';
import {StoreContext} from "../../constantStore";
import Selects from "../../../../components/Selects";
import ConditionalText from "../../../../components/ConditionalText";

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

const TabFour = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Selects("Do you require PCI-DSS?", classes.label, api.setReqPCI, "placeholder", true, "secondary", api.setReqPCIScore)}
            {Selects("Are you registered with the Information Cominssioner's Office?", classes.label, api.setRegICO, "placeholder", true, "secondary", api.setPlaceholder)}
            {Selects("Are you Cyber Essentials certified?", classes.label, api.setCybEssCert, "placeholder", true, "secondary", api.setPlaceholder)}
            {Selects("Are you GDPR accredited?", classes.label, api.setGdprAccred, "placeholder", true, "secondary", api.setPlaceholder)}
            {Selects("Are you ISO 270001 accredited?", classes.label, api.setISOAccred, "placeholder", true, "secondary", api.setPlaceholder)}

            {Selects("Do you have any other relevant accreditations?", classes.label, api.setOtherAccred, "placeholder", true, "secondary", api.setPlaceholder)}
            {ConditionalText(api.otherAccred, 'yes', classes.field, api.setOtherAccredDetails, true, "placeholder")}
        </form>
    );
}

export default TabFour;