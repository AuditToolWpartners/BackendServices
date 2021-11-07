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


const TabSeven = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Selects("Do you have a documented asset register which records hardware and software assets which includes version number and any privileged users?", classes.label, api.setAsssetRegister, api.assetRegister, true, "secondary", api.setAsssetRegisterScore)}
            {Selects("Do you know which of your assets are 'crown jewels'?", classes.label, api.setCrownJewls, api.crownJewls, true, "secondary", api.setCrownJewlsScore)}
        </form>

    )
}

export default TabSeven;