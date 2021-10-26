import TextFields from "../../../../components/TextFields";
import Selects from "../../../../components/Selects";
import ConditionalText from "../../../../components/ConditionalText";
import SelectsCustom from "../../../../components/SelectsCustom";
import React from "react";
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
            {TextFields(classes.field, api.setOrgName, "Organisation Name", "secondary", "text", "true", true, "orgName", false)}
            {TextFields(classes.field, api.setRegAddress, "Registered Address", "secondary", "text", true, "true", "regAddress", false)}
            {TextFields(classes.field, api.setCompanyType, "Company Type", "secondary", "text", "true", true, "companyType", false)}
            {TextFields(classes.field, api.setYearOI, "Year Of Incorporation", "secondary", "date", true, "yearOI", true)}

            {Selects("Have you suffered a cyber attack which has affected operations?", classes.label, api.setSufCyberAttack, "sufCyberAttack", true, "secondary", api.setCyberAttackCatScore)}
            {ConditionalText(api.sufCyberAttack, 'yes', classes.fields, api.setAttackDetails, true, "attackDetails")}
            <br/>

            {Selects("Do you have cyber insurance cover?", classes.label, api.setCybInsurance, "cybInsurance", true, "secondary")}
            {ConditionalText(api.cybInsurance, 'yes', classes.field, api.setInsuranceDetails, true, "insuranceDetails")}

            {SelectsCustom("Which of these IT Models do you use?", classes.label, api.setItModels, true, "secondary", "byod", "id", "mm", "Bring Your Own Device", "Issued Devices", "Mixed Model")}
        </form>

        )
}

export default TabOne