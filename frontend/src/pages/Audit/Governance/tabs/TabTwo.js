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
            {Selects("Do you have a documented 'risk register' that incorporates cyber risk?", classes.label, api.setRiskRegister, api.riskRegister, true, "secondary", api.setRiskRegisterScore)}
            {Selects("Is this reviewed by the Senior Leadership team?", classes.label, api.setReviewedLeadership, api.reviewedLeadership, true, "secondary", api.setReviewedLeadershipScore)}
            {Selects("Do you have a regular risk review meeting?", classes.label, api.setRiskReviewMeeting, api.riskReviewMeeting, true, "secondary", api.setRiskReviewMeetingScore)}
            {Selects("Do you have a risk appetite statement to guide risk management?", classes.label, api.setRiskManagementGuide, api.riskManagementGuide, true, "secondary", api.setRiskManagementGuideScore)}
        </form>

    )
}

export default TabTwo