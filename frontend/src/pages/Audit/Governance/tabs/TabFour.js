import React from "react";
import Selects from "../../../../components/Selects";
import {makeStyles} from "@material-ui/core";
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
    }
})


const TabFour = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <p>Which of the following policies do you currently have in place?</p>
            {Selects("Password Policy", classes.label, api.setPasswordPolicy, api.passwordPolicy, true, "secondary", api.setPasswordPolicyScore)}
            {Selects("Security Policy", classes.label, api.setSecurityPolicy, api.securityPolicy, true, "secondary", api.setSecurityPolicyScore)}
            {Selects("Acceptable Use Policy", classes.label, api.setAcceptableUsePolicy, api.acceptableUsePolicy, true, "secondary", api.setAcceptableUsePolicyScore)}
            {Selects("Access Management Policy", classes.label, api.setAccessManagementPolicy, api.accessManagementPolicy, true, "secondary", api.setAccessManagementPolicyScore)}
            {Selects("Secure Device Policy / Specified Device Build", classes.label, api.setSecureDevicePolicy, api.secureDevicePolicy, true, "secondary", api.setSecureDevicePolicyScore)}
            {Selects("Remote Working Policy", classes.label, api.setRemoteWorkingPolicy, api.remoteWorkingPolicy, true, "secondary", api.setRemoteWorkingPolicyScore)}
            {Selects("Social Media Policy", classes.label, api.setSocialMediaPolicy, api.socialMediaPolicy, true, "secondary", api.setSocialMediaPolicyScore)}
            {Selects("Bring Your Own Device Policy", classes.label, api.setByodPolicy, api.byodPolicy, true, "secondary", api.setByodPolicyScore)}
            {TextFields(classes.field, api.setOtherPolicy, api.otherPolicy,"Other", "secondary", "text")}
            {Selects("Are policies regularly reviewed and updated?", classes.label, api.setPoliciesUpdated, api.policiesUpdated, true, "secondary", api.setPoliciesUpdatedScore)}
            {Selects("Are updated policies communicated to staff?", classes.label, api.setPoliciesToldToStaff, api.policiesToldToStaff, true, "secondary", api.setPoliciesToldToStaffScore)}
        </form>

    )
}

export default TabFour