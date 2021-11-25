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


const TabTwo = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Selects("Is administrator access limited to users who require it for their role?", classes.label, api.setLimitAdminAccess, api.limitAdminAccess, true, "secondary", api.setLimitAdminAccessScore)}
            {Selects("Are users restricted from using administrator accounts for day to day use?", classes.label, api.setAdminRestriction, api.adminRestriction, true, "secondary", api.setAdminRestrictionScore)}
            {Selects("Do changes to privileged accounts generate alerts?", classes.label, api.setGenerateAlerts, api.generateAlerts, true, "secondary", api.setGenerateAlertsScore)}
            {Selects("Do you have a complexity requirement for passwords?", classes.label, api.setComplexityReqPass, api.complexityReqPass, true, "secondary", api.setComplexityReqPassScore)}
            {Selects("Do you have a complexity requirement for administrator passwords?", classes.label, api.setComplexReqAdminPass, api.complexReqAdminPass, true, "secondary", api.setComplexReqAdminPassScore)}
            {Selects("Do you allow users to use a password management application?", classes.label, api.setPasswordManagment, api.passwordManagement, true, "secondary", api.setPasswordManagmentScore)}
        </form>

    )
}

export default TabTwo