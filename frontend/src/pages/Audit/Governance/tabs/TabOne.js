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
            {Selects("Do you have a named individual responsible for cyber security?", classes.label, api.setIndividualResponsible, api.individualResponsible, true, "secondary", api.setIndividualResponsibleScore)}
            {Selects("Is responsibility for cyber security documented in a role description?", classes.label, api.setResponsibleDoc, api.responsibleDoc, true, "secondary", api.setResponsibleDocScore)}
            {Selects("Is there a budget allocated for cyber security?", classes.label, api.setBudgetSecurity, api.budgetSecurity, true, "secondary", api.setPlaceholder)}
        </form>

    )
}

export default TabOne