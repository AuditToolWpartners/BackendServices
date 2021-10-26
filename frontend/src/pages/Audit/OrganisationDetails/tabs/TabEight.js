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

const TabEight = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <p>Do you use any of the following productivity tools?</p>
            {Selects("Slack", classes.label, api.setSlack, api.slack, true, "secondary", api.setPlaceholder)}
            {Selects("Jira", classes.label, api.setJira, api.jira, true, "secondary", api.setPlaceholder)}
            {Selects("Trello", classes.label, api.setTrello, api.trello, true, "secondary", api.setPlaceholder)}

            {Selects("Other", classes.label, api.setOtherTools, api.otherTools, true, "secondary", api.setPlaceholder)}
            {ConditionalText(api.otherTools, 'yes', classes.field, api.setOtherToolsDetails, api.otherSocialsDetails)}
        </form>
    );
}

export default TabEight;