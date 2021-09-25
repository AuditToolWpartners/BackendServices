import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core';

// Components from MUI
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Local components
import ConditionalText from '../../../components/ConditionalText';
import TextFields from '../../../components/TextFields';
import Buttons from '../../../components/Buttons';
import Selects from '../../../components/Selects';
import TabPanel from '../../../components/TabPanel';
import TabTwo from './tabs/TabTwo';
import SelectsCustom from '../../../components/SelectsCustom';
import {StoreContext} from "../constantStore";

// Logic
import handleSubmits from '../../../utils/handleSubmit';
import handleNull from '../../../utils/handleNull';

// Icons from MUI
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';

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

const getLS = (value) => {
    return (
        localStorage.getItem(value)
    )
}

const setLS = (value, hook) => {
    return (
        localStorage.setItem(value, hook)
    )
}

const OrgDetails = () => {
    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);
    const storeConstant = React.useContext(StoreContext);
    const { //TODO: Maybe remove this, I can simply just do storeConstant.setOrgName, however this may not be as efficient if i have to call them more than once
        orgName,
        setOrgName,
        companyType,
        setCompanyType,
        regAddress,
        setRegAddress,
        yearOI,
        setYearOI,
        attackDetails,
        setAttackDetails,
        sufCyberAttack,
        setSufCyberAttack,
        cybInsurance,
        setCybInsurance,
        insuranceDetails,
        setInsuranceDetails,
        itModels,
        setItModels
    } = storeConstant;

    const [cyberAttackCatScore, setCyberAttackCatScore] = useState(0);

    // Error States
    const [orgNameError, setOrgNameError] = useState(false) //TODO: Change these variables into the store variables
    const [companyTypeError, setCompanyTypeError] = useState(false)
    const [regAddressError, setRegAddressError] = useState(false)
    const [yearOIError, setYearOIError] = useState(false)
    const [attackDetailsError, setAttackDetailsError] = useState(false)
    const [insuranceDetailsError, setInsuranceDetailsError] = useState(false)

    const listValue = ["orgName", "regAddress", "companyType", "yearOI", "sufCyberAttack", "attackDetails", "insuranceDetails", "cybInsurance", "itModels"];
    const listHook = [orgName, regAddress, companyType, yearOI, sufCyberAttack, attackDetails, insuranceDetails, cybInsurance, itModels];
    const listSetHook = [setOrgName, setRegAddress, setCompanyType, setYearOI, setSufCyberAttack, setAttackDetails, setInsuranceDetails, setCybInsurance, setItModels];

    useEffect(() => {
        setOrgName(getLS("orgName"));
        setRegAddress(getLS("regAddress"));
        setCompanyType(getLS("companyType"));
        setYearOI(getLS("yearOI"));
        setSufCyberAttack(getLS("sufCyberAttack"))
        setAttackDetails(getLS("attackDetails"))
        setInsuranceDetails(getLS("insuranceDetails"))
        setCybInsurance(getLS("cybInsurance"))
        setItModels(getLS("itModels"))

        for (let i = 0; i < listHook.length && listSetHook; i++) {
            handleNull(listHook[i], listSetHook[i])
        }

        for (let i = 0; i < listValue.length && listHook; i++) {
            setLS(listValue[i], listHook[i])
        }

        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => { //TODO: Figure out a new way of doing this
        e.preventDefault()

        handleSubmits(orgName, setOrgNameError);
        handleSubmits(regAddress, setRegAddressError);
        handleSubmits(companyType, setCompanyTypeError);
        handleSubmits(yearOI, setYearOIError);
        handleSubmits(attackDetails, setAttackDetailsError);
        handleSubmits(insuranceDetails, setInsuranceDetailsError);
    }

    const handleSave = () => { //TODO: Update this shoddy code
        for (let i = 0; i < listValue.length && listHook; i++) {
            setLS(listValue[i], listHook[i])
        }
        console.log(cyberAttackCatScore)
    }

    const tabNextButton = () => {
        setTabValue(tabValue + 1)
    }

    const tabPrevButton = () => {
        setTabValue(tabValue - 1)
    }

    const HandleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Container>
            <Tabs value={tabValue} onChange={HandleTabChange} textColor="primary" variant="scrollable">
                <Tab label="1.1" {...a11yProps(0)} />
                <Tab label="1.2" {...a11yProps(1)} />
                <Tab label="1.3" {...a11yProps(3)} />
                <Tab label="1.4" {...a11yProps(4)} />
                <Tab label="1.5" {...a11yProps(5)} />
                <Tab label="1.6" {...a11yProps(6)} />
                <Tab label="1.7" {...a11yProps(7)} />
                <Tab label="1.8" {...a11yProps(8)} />

            </Tabs>
            <TabPanel value={tabValue} index={0}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    {TextFields(classes.field, setOrgName, orgNameError, "Organisation Name", "secondary", "text", "true", true, "orgName", false)}
                    {TextFields(classes.field, setRegAddress, regAddressError, "Registered Address", "secondary", "text", true, "true", "regAddress", false)}
                    {TextFields(classes.field, setCompanyType, companyTypeError, "Company Type", "secondary", "text", "true", true, "companyType", false)}
                    {TextFields(classes.field, setYearOI, yearOIError, "Year Of Incorporation", "secondary", "date", true, "yearOI", true)}

                    {Selects("Have you suffered a cyber attack which has affected operations?", classes.label, setSufCyberAttack, "sufCyberAttack", true, "secondary", setCyberAttackCatScore, cyberAttackCatScore)}
                    {ConditionalText(sufCyberAttack, 'yes', classes.fields, setAttackDetails, true, attackDetailsError, "attackDetails")}
                    <br/>

                    {Selects("Do you have cyber insurance cover?", classes.label, setCybInsurance, "cybInsurance", true, "secondary")}
                    {ConditionalText(cybInsurance, 'yes', classes.field, setInsuranceDetails, true, insuranceDetailsError, "insuranceDetails")}

                    {SelectsCustom("Which of these IT Models do you use?", classes.label, setItModels, "itModels", true, "secondary", "byod", "id", "mm", "Bring Your Own Device", "Issued Devices", "Mixed Model")}

                    {Buttons(tabNextButton, classes.bttn, "primary", <KeyboardArrowRightIcon/>, "Next")}
                    {Buttons(handleSave, classes.bttn, "primary", <SaveOutlinedIcon/>, "Save")}
                    <br/>
                </form>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <TabTwo/>
                {Buttons(tabPrevButton, classes.bttn, "primary", <KeyboardArrowLeftIcon/>, "Previous")}
                {Buttons(tabNextButton, classes.bttn, "primary", <KeyboardArrowRightIcon/>, "Next")}
                {Buttons(handleSave, classes.bttn, "primary", <SaveOutlinedIcon/>, "Save")}
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                {Buttons(tabPrevButton, classes.bttn, "primary", <KeyboardArrowLeftIcon/>, "Previous")}
                {Buttons(handleSubmit, classes.bttn, "primary", <KeyboardArrowRightIcon color='secondary'/>, "Submit")}
            </TabPanel>
        </Container>
    )

}

export default OrgDetails;
