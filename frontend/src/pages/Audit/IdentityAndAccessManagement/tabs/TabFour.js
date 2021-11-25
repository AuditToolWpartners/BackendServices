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


const TabFour = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Selects("Do you regularly review who has privileged access to systems and data?", classes.label, api.setSystemsData, api.systemsData, true, "secondary", api.setSystemsDataScore)}
            {Selects("Do you audit systems on a regular basis to ensure obsolete user access is disabled?", classes.label, api.setObsoleteUser, api.obsoleteUser, true, "secondary", api.setObsoleteUserScore)}
        </form>

    )
}

export default TabFour