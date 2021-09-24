import React, {createContext, useState} from 'react';
import PropTypes from "prop-types";

export const StoreContext = createContext({});

export const Provider = props => {
    const {
        orgName: userOrgName,
        companyType: userCompanyType,
        regAddress: userRegAddress,
        yearOI: userYearOI,
        attackDetails: userAttackDetails,
        sufCyberAttack: userSufCyberAttack,
        cybInsurance: userCybInsurance,
        insuranceDetails: userInsuranceDetails,
        itModels: userItModels,
        children
    } = props;

    const [orgName, setOrgName] = React.useState(userOrgName);
    const [companyType, setCompanyType] = React.useState(userCompanyType);
    const [regAddress, setRegAddress] = useState(userRegAddress);
    const [yearOI, setYearOI] = useState(userYearOI);
    const [attackDetails, setAttackDetails] = useState(userAttackDetails);
    const [sufCyberAttack, setSufCyberAttack] = useState(userSufCyberAttack);
    const [cybInsurance, setCybInsurance] = useState(userCybInsurance);
    const [insuranceDetails, setInsuranceDetails] = useState(userInsuranceDetails);
    const [itModels, setItModels] = useState(userItModels);


    const setConstants = {
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
    }


    return <StoreContext.Provider value={setConstants}>{children}</StoreContext.Provider>;
};

export const {Consumer} = StoreContext;

Provider.propTypes = {
    orgName: PropTypes.string,
    companyType: PropTypes.string,
    regAddress: PropTypes.string,
    yearOI: PropTypes.string,
    attackDetails: PropTypes.string
};

Provider.defaultProps = {
    orgName: '',
    companyType: '',
    regAddress: '',
    yearOI: '',
    attackDetails: '',
    cybInsurance: '',
    insuranceDetails: '',
    itModels: ''
};

export default Provider;