import React from "react";
import Selects from "../../../../components/Selects";
import {makeStyles} from "@material-ui/core";
import {StoreContext} from "../../constantStore";

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
    }
})

const TabOne = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Selects("Do new staff receive cyber security training when they join?", classes.label, api.setStaffTraining, api.staffTraining, true, "secondary", api.setStaffTrainingScore)}
            {Selects("Do existing staff receive cyber security training updates regularly?", classes.label, api.setStaffTrainingUpdates, api.staffTrainingUpdates, true, "secondary", api.setStaffTrainingUpdatesScore)}
            {Topics()}
        </form>

    )
}

const Topics = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);
    if(api.staffTrainingUpdates === 'yes' || api.staffTraining === 'yes') {
        return(
            <form noValidate autoComplete="off" onSubmit={(e) => {e.preventDefault()}}>
                <p>What topics are covered?</p>
                {Selects("Phishing", classes.label, api.setPhishingTraining, api.phishingTraining, true, "secondary", api.setPhishingTrainingScore)}
                {Selects("Secure Passwords", classes.label, api.setPasswordTraining, api.passwordTraining, true, "secondary", api.passwordTraining)}
                {Selects("Secure Working", classes.label, api.setSecureWorkingTraining, api.secureWorkingTraining, true, "secondary", api.setSecureWorkingTrainingScore)}
                {Selects("Data Protection", classes.label, api.setProtectionTraining, api.protectionTraining, true, "secondary", api.setProtectionTrainingScore)}
                {Selects("Responding to a cyber security incident", classes.label, api.setSecurityIncidentTraining, api.securityIncidentTraining, true, "secondary", api.setSecurityIncidentTrainingScore)}
                {Selects("Business Email Compromise", classes.label, api.setEmailTraining, api.emailTraining, true, "secondary", api.setEmailTrainingScore)}
                {Selects("Social Media", classes.label, api.setSocialMediaTraining, api.socialMediaTraining, true, "secondary", api.setSocialMediaTrainingScore)}
            </form>

        )
    }
}

export default TabOne