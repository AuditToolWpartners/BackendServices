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


const TabThree = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Selects("Do you have a documented cyber security strategy and roadmap?", classes.label, api.setDocumentedStrategy, api.documentedStrategy, true, "secondary", api.setDocumentedStrategyScore)}
            {Selects("Is your cyber security strategy and roadmap regularly reviewed?", classes.label, api.setStrategyReviewed, api.strategyReviewed, true, "secondary", api.setStrategyReviewedScore)}
            {Selects("Does your roadmap have buy in from your Senior Leadership team?", classes.label, api.setReviewedLeadership, api.reviewedLeadership, true, "secondary", api.setReviewedLeadershipScore)}
        </form>

    )
}

export default TabThree