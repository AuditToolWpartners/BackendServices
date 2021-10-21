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
        srvCNI: userSrvCNI,
        srvHealth: userSrvHealth,
        reqPCI: userReqPCI,
        regICO: userRegICO,
        cybEssCert: userCybEssCert,
        gdprAccred: userGdprAccred,
        ISOAccred: userISOAccred,
        otherAccred: userOtherAccred,
        otherAccredDetails: userOtherAccredDetails,
        devSoftware: userDevSoftware,
        managedServices: userManagedServices,
        hostingServices: userHostingServices,
        subjectRecords: userSubjectRecords,
        healthRecords: userHealthRecords,
        processPayments: userProcessPayments,
//      Scoring
        cybAttackScore: userCybAttackScore,
        cybInsCatScore: usercybInsCatScore,
        prtCNIScore: userPrtCNIScore,
        srvGovScore: userSrvGovScore,
        srvDefScore: userSrvDefScore,
        srvCNIScore: userSrvCNIScore,
        srvHealthScore: userSrvHealthScore,
        reqPCIScore: userReqPCIScore,
        devSoftwareScore: userDevSoftwareScore,
        managedServicesScore: userManagedServicesScore,
        hostingServicesScore: userHostingServicesScore,
        healthRecordsScore: userHealthRecordsScore,
        processPaymentsScore: userProcessPaymentsScore,
        //
        placeholder: userPlaceholder,

        children
    } = props;

    // Authentication Variables
    const [auth, setAuth] = useState(clientAuth);

    // Data Variables
    const [orgName, setOrgName] = useState(userOrgName);
    const [companyType, setCompanyType] = useState(userCompanyType);
    const [regAddress, setRegAddress] = useState(userRegAddress);
    const [yearOI, setYearOI] = useState(userYearOI);
    const [sufCyberAttack, setSufCyberAttack] = useState(userSufCyberAttack);
    const [attackDetails, setAttackDetails] = useState(userAttackDetails);
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
    const [srvCNI, setSrvCNI] = useState(userSrvCNI);
    const [srvHealth, setSrvHealth] = useState(userSrvHealth);
    const [reqPCI, setReqPCI] = useState(userReqPCI);
    const [regICO, setRegICO] = useState(userRegICO);
    const [cybEssCert, setCybEssCert] = useState(userCybEssCert);
    const [gdprAccred, setGdprAccred] = useState(userGdprAccred);
    const [ISOAccred, setISOAccred] = useState(userISOAccred);
    const [otherAccred, setOtherAccred] = useState(userOtherAccred);
    const [otherAccredDetails, setOtherAccredDetails] = useState(userOtherAccredDetails);
    const [devSoftware, setDevSoftware] = useState(userDevSoftware);
    const [managedServices, setManagedServices] = useState(userManagedServices);
    const [hostingServices, setHostingServices] = useState(userHostingServices);
    const [subjectRecords, setSubjectRecords] = useState(userSubjectRecords);
    const [healthRecords, setHealthRecords] = useState(userHealthRecords);
    const [processPayments, setProcessPayments] = useState(userProcessPayments);
    // Score Variables
    const [cybAttackScore, setCybAttackScore] = useState(userCybAttackScore);
    const [cybInsCatScore, setCybInsCatScore] = useState(usercybInsCatScore);
    const [prtCNIScore, setPrtCNIScore] = useState(userPrtCNIScore);
    const [srvGovScore, setSrvGovScore] = useState(userSrvGovScore);
    const [srvDefScore, setSrvDefScore] = useState(userSrvDefScore);
    const [srvCNIScore, setSrvCNIScore] = useState(userSrvCNIScore);
    const [srvHealthScore, setSrvHealthScore] = useState(userSrvHealthScore);
    const [reqPCIScore, setReqPCIScore] = useState(userReqPCIScore);
    const [devSoftwareScore, setDevSoftwareScore] = useState(userDevSoftwareScore);
    const [managedServicesScore, setManagedServicesScore] = useState(userManagedServicesScore);
    const [hostingServicesScore, setHostingServicesScore] = useState(userHostingServicesScore);
    const [healthRecordsScore, setHealthRecordsScore] = useState(userHealthRecordsScore);
    const [processPaymentsScore, setProcessPaymentsScore] = useState(userProcessPaymentsScore);
    //
    const [placeholder, setPlaceholder] = useState(userPlaceholder);

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
        srvCNI,
        setSrvCNI,
        srvHealth,
        setSrvHealth,
        reqPCI,
        setReqPCI,
        regICO,
        setRegICO,
        cybEssCert,
        setCybEssCert,
        gdprAccred,
        setGdprAccred,
        ISOAccred,
        setISOAccred,
        otherAccred,
        setOtherAccred,
        otherAccredDetails,
        setOtherAccredDetails,
        devSoftware,
        setDevSoftware,
        managedServices,
        setManagedServices,
        hostingServices,
        setHostingServices,
        subjectRecords,
        setSubjectRecords,
        healthRecords,
        setHealthRecords,
        processPayments,
        setProcessPayments,
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
        srvCNIScore,
        setSrvCNIScore,
        srvHealthScore,
        setSrvHealthScore,
        reqPCIScore,
        setReqPCIScore,
        devSoftwareScore,
        setDevSoftwareScore,
        managedServicesScore,
        setManagedServicesScore,
        hostingServicesScore,
        setHostingServicesScore,
        healthRecordsScore,
        setHealthRecordsScore,
        processPaymentsScore,
        setProcessPaymentsScore,
//      This is for the drop down questions that do not need scoring.
        placeholder,
        setPlaceholder,

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
    sufCyberAttack: 'no',
    attackDetails: '',
    cybInsurance: 'no',
    insuranceDetails: '',
    itModels: 'byod',
    comSize: 'small',
    employees: 0,
    contractors: 0,
    region: '',
    indVert: '',
    prtCNI: '',
    srvGov: '',
    srvDef: '',
    srvCNI: '',
    srvHealth: '',
    reqPCI: '',
    regICO: '',
    cybEssCert: '',
    gdprAccred: '',
    ISOAccred: '',
    otherAccred: '',
    otherAccredDetails: '',
    devSoftware: '',
    managedServices: '',
    hostingServices: '',
    subjectRecords: 0,
    healthRecords: '',
    processPayments: '',
//  Scoring
    cybAttackScore: 0,
    cybInsCatScore: 0,
    prtCNIScore: 0,
    srvGovScore: 0,
    srvDefScore: 0,
    srvCNIScore: 0,
    srvHealthScore: 0,
    reqPCIScore: 0,
    devSoftwareScore: 0,
    managedServicesScore: 0,
    hostingServicesScore: 0,
    healthRecordsScore: 0,

//
    placeholder: 0,
};

export default Provider;