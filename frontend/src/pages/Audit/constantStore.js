import React, {createContext, useState} from 'react';
import PropTypes from "prop-types";

export const StoreContext = createContext({});

export const Provider = props => {

    const {
//      Authentication
        auth: clientAuth,
//      Data
        orgName: userOrgName,
        companyType: userCompanyType,
        regAddress: userRegAddress,
        yearOI: userYearOI,
        attackDetails: userAttackDetails,
        sufCyberAttack: userSufCyberAttack,
        cybInsurance: userCybInsurance,
        insuranceDetails: userInsuranceDetails,
        itModels: userItModels,
        comSize: userComSize,
        employees: userEmployees,
        contractors: userContractors,
        region: userRegion,
        indVert: userIndVert,
        prtCNI: userPrtCNI,
        srvGov: userSrvGov,
        srvDef: userSrvDef,
//      Scoring
        cybAttackScore: userCybAttackScore,
        cybInsCatScore: usercybInsCatScore,
        prtCNIScore: userPrtCNIScore,
        srvGovScore: userSrvGovScore,
        srvDefScore: userSrvDefScore,

        children
    } = props;

    // Authentication Variables
    const [auth, setAuth] = useState(clientAuth);

    // Data Variables
    const [orgName, setOrgName] = useState(userOrgName);
    const [companyType, setCompanyType] = useState(userCompanyType);
    const [regAddress, setRegAddress] = useState(userRegAddress);
    const [yearOI, setYearOI] = useState(userYearOI);
    const [attackDetails, setAttackDetails] = useState(userAttackDetails);
    const [sufCyberAttack, setSufCyberAttack] = useState(userSufCyberAttack);
    const [cybInsurance, setCybInsurance] = useState(userCybInsurance);
    const [insuranceDetails, setInsuranceDetails] = useState(userInsuranceDetails);
    const [itModels, setItModels] = useState(userItModels);
    const [comSize, setComSize] = useState(userComSize);
    const [employees, setEmployees] = useState(userEmployees);
    const [contractors, setContractors] = useState(userContractors);
    const [region, setRegion] = useState(userRegion);
    const [indVert, setIndVert] = useState(userIndVert);
    const [prtCNI, setPrtCNI] = useState(userPrtCNI);
    const [srvGov, setSrvGov] = useState(userSrvGov);
    const [srvDef, setSrvDef] = useState(userSrvDef);

    // Score Variables
    const [cybAttackScore, setCybAttackScore] = useState(userCybAttackScore);
    const [cybInsCatScore, setCybInsCatScore] = useState(usercybInsCatScore);
    const [prtCNIScore, setPrtCNIScore] = useState(userPrtCNIScore);
    const [srvGovScore, setSrvGovScore] = useState(userSrvGovScore);
    const [srvDefScore, setSrvDefScore] = useState(userSrvDefScore);

//
//  ALL VARIABLES ARE IN THE CORRECT ORDER, QUESTION 1 = VARIABLES 1 & 2, ETC
//
    const api = {
//
//      Authentication Variables
//
        auth,
        setAuth,
//
//      Data Variables
//
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
        setItModels,
        comSize,
        setComSize,
        employees,
        setEmployees,
        contractors,
        setContractors,
        region,
        setRegion,
        indVert,
        setIndVert,
        prtCNI,
        setPrtCNI,
        srvGov,
        setSrvGov,
        srvDef,
        setSrvDef,
//
//      Score Variables
//
        cybAttackScore,
        setCybAttackScore,
        cybInsCatScore,
        setCybInsCatScore,
        prtCNIScore,
        setPrtCNIScore,
        srvGovScore,
        setSrvGovScore,
        srvDefScore,
        setSrvDefScore,

    }

    return <StoreContext.Provider value={api}>{children}</StoreContext.Provider>;
};

export const {Consumer} = StoreContext;

Provider.propTypes = {
    auth: PropTypes.bool,
    orgName: PropTypes.string,
    companyType: PropTypes.string,
    regAddress: PropTypes.string,
    yearOI: PropTypes.string,
    attackDetails: PropTypes.string
};

Provider.defaultProps = {
//  Authentication
    auth: false,
//  Data
    orgName: '',
    companyType: '',
    regAddress: '',
    yearOI: '',
    attackDetails: '',
    cybInsurance: '',
    insuranceDetails: '',
    itModels: '',
    employees: 0,
    contractors: 0,
    region: '',
    indVert: '',
//  Scoring
    cybAttackScore: 0,
    cybInsCatScore: 0,
    prtCNIScore: 0,
    srvGovScore: 0,
    srvDefScore: 0,
};

export default Provider;