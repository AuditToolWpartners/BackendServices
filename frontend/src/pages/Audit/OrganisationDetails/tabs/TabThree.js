import React from 'react';
import { makeStyles } from '@material-ui/core';
import {StoreContext} from "../../constantStore";
import TextFields from "../../../../components/TextFields";
import Selects from "../../../../components/Selects";

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

const TabThree = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {TextFields(classes.field, api.setIndVert, api.indVert,"Primary industry vertical", "secondary", "text", true, "placeholder", true)}
            {Selects("Are you considered to be part of CNI?", classes.label, api.setPrtCNI, api.prtCNI,true, "secondary", api.setPrtCNIScore)}
            {Selects("Do you provide services to government?", classes.label, api.setSrvGov, api.srvGov,true, "secondary", api.setSrvGovScore)}
            {Selects("Do you provide services to defence/military?", classes.label, api.setSrvDef, api.srvDef,true, "secondary", api.setSrvDefScore)}
            {Selects("Do you provide services to CNI?", classes.label, api.setSrvCNI, api.srvCNI,true, "secondary", api.setSrvCNIScore)}
            {Selects("Do you provide services to healthcare?", classes.label, api.setSrvHealth, api.srvHealth,true, "secondary", api.setSrvHealthScore)}
        </form>
    );
}

export default TabThree;