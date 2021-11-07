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


const TabSix = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <p>Do you have clearly defined roles and responsibilities for the management of:</p>
            {Selects("Risk Management", classes.label, api.setRiskManagement, api.riskManagement, true, "secondary", api.setRiskManagementScore)}
            {Selects("Network Security", classes.label, api.setNetworkSecurity, api.networkSecurity, true, "secondary", api.setNetworkSecurityScore)}
            {Selects("Access Control", classes.label, api.setAccessControl, api.accessControl, true, "secondary", api.setAccessControlScore)}
            {Selects("Vulnerability Management", classes.label, api.setVulnerabilityManagement, api.vulnerabilityManagement, true, "secondary", api.setVulnerabilityManagementScore)}
            {Selects("Testing", classes.label, api.setTesting, api.testing, true, "secondary", api.setTestingScore)}
            {Selects("Threat Intelligence", classes.label, api.setThreatIntelligence, api.threatIntelligence, true, "secondary", api.setThreatIntelligenceScore)}
            {Selects("Incident Response", classes.label, api.setIncidentResponse, api.incidentResponse, true, "secondary", api.setIncidentResponseScore)}
            {Selects("Backup and Recovery", classes.label, api.setBackupRecovery, api.backupRecovery, true, "secondary", api.setBackupRecoveryScore)}
            {Selects("Training and Awareness", classes.label, api.setTrainingAwareness, api.trainingAwareness, true, "secondary", api.setTrainingAwarenessScore)}
        </form>

    )
}

export default TabSix;