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
            {TextFields(classes.field, api.setOrgName, api.orgName,"Organisation Name", "secondary", "text")}
            {TextFields(classes.field, api.setRegAddress, api.regAddress,"Registered Address", "secondary", "text")}
            {TextFields(classes.field, api.setCompanyType, api.companyType,"Company Type", "secondary", "text")}
            {TextFields(classes.field, api.setYearOI, api.yearOI,"Year Of Incorporation", "secondary", "date")}

            {Selects("Have you suffered a cyber attack which has affected operations?", classes.label, api.setSufCyberAttack, api.sufCyberAttack, true, "secondary", api.setCybAttackScore)}
            {ConditionalText(api.sufCyberAttack, 'yes', classes.fields, api.setAttackDetails, api.attackDetails)}
            <br/>

            {Selects("Do you have cyber insurance cover?", classes.label, api.setCybInsurance, api.cybInsurance, true, "secondary", api.setCybInsCatScore)}
            {ConditionalText(api.cybInsurance, 'yes', classes.field, api.setInsuranceDetails, api.insuranceDetails)}

            {SelectsCustom("Which of these IT Models do you use?", classes.label, api.setItModels, api.itModels,true, "secondary", "byod", "id", "mm", "Bring Your Own Device", "Issued Devices", "Mixed Model")}
        </form>

        )
}

export default TabOne