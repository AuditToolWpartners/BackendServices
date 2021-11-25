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
            {Selects("Is access to confidential systems, services and data restricted to authorised personnel?", classes.label, api.setDataRestriction, api.dataRestriction, true, "secondary", api.setDataRestrictionScore)}
            {Selects("Is all software that provides access to confidential information inaccessible to external users?", classes.label, api.setConfidentialInfo, api.confidentialInfo, true, "secondary", api.setConfidentialInfoScore)}
        </form>

    )
}

export default TabOne