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
        website: userWebsite,
        linkedIn: userLinkedIn,
        twitter: userTwitter,
        facebook: userFacebook,
        instagram: userInstagram,
        otherSocials: userOtherSocials,
        otherSocialsDetails: userOtherSocialsDetails,
        slack: userSlack,
        jira: userJira,
        trello: userTrello,
        otherTools: userOtherTools,
        otherToolsDetails: userOtherToolsDetails,
        // Governance
        individualResponsible: userIndividualReponsible,
        responsibleDoc: userResponsibleDoc,
        budgetSecurity: userBudgetSecurity,
        riskRegister: userRiskRegister,
        reviewedLeadership: userReviewedLeadership,
        riskReviewMeeting: userRiskReviewMeeting,
        riskManagementGuide: userRiskManagementGuide,
        documentedStrategy: userDocumentedStrategy,
        strategyReviewed: userStrategyReviewed,
        roadmapLeadership: userRoadmapLeadership,
        passwordPolicy: userPasswordPolicy,
        securityPolicy: userSecurityPolicy,
        acceptableUsePolicy: userAcceptableUsePolicy,
        accessManagementPolicy: userAccessManagementPolicy,
        secureDevicePolicy: userSecureDevicePolicy,
        remoteWorkingPolicy: userRemoteWorkingPolicy,
        socialMediaPolicy: userSocialMediaPolicy,
        byodPolicy: userBoydPolicy,
        otherPolicy: userOtherPolicy,
        policiesUpdated: userPoliciesUpdated,
        policiesToldToStaff: userPoliciesToldToStaff,
        dataProtectionOfficer: userDataProtectionOfficer,
        riskManagement: userRiskManagement,
        networkSecurity: userNetworkSecurity,
        accessControl: userAccessControl,
        vulnerabilityManagement: userVulnerabilityManagement,
        testing: userTesting,
        threatIntelligence: userThreatIntelligence,
        incidentResponse: userIncidentResponse,
        backupRecovery: userBackupRecovery,
        trainingAwareness: userTrainingAwareness,
        assetRegister: userAssetRegister,
        crownJewls: userCrownJewls,
        // Scoring
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
        websiteScore: userWebsiteScore,
        linkedInScore: userLinkedInScore,
        twitterScore: userTwitterScore,
        facebookScore: userFacebookScore,
        instagramScore: userInstagramScore,
        // Governance
        individualResponsibleScore: userIndividualReponsibleScore,
        responsibleDocScore: userResponsibleDocScore,
        riskRegisterScore: userRiskRegisterScore,
        reviewedLeadershipScore: userReviewedLeadershipScore,
        riskReviewMeetingScore: userRiskReviewMeetingScore,
        riskManagementGuideScore: userRiskManagementGuideScore,
        documentedStrategyScore: userDocumentedStrategyScore,
        strategyReviewedScore: userStrategyReviewedScore,
        roadmapLeadershipScore: userRoadmapLeadershipScore,
        passwordPolicyScore: userPasswordPolicyScore,
        securityPolicyScore: userSecurityPolicyScore,
        acceptableUsePolicyScore: userAcceptableUsePolicyScore,
        accessManagementPolicyScore: userAccessManagementPolicyScore,
        SecureDevicePolicyScore: userSecureDevicePolicyScore,
        remoteWorkingPolicyScore: userRemoteWorkingPolicyScore,
        socialMediaPolicyScore: userSocialMediaPolicyScore,
        byodPolicyScore: userBoydPolicyScore,
        policiesUpdatedScore: userPoliciesUpdatedScore,
        policiesToldToStaffScore: userPoliciesToldToStaffScore,
        DataProtectionOfficerScore: userDataProtectionOfficerScore,
        riskManagementScore: userRiskManagementScore,
        networkSecurityScore: userNetworkSecurityScore,
        accessControlScore: userAccessControlScore,
        vulnerabilityManagementScore: userVulnerabilityManagementScore,
        testingScore: userTestingScore,
        threatIntelligenceScore: userThreatIntelligenceScore,
        incidentResponseScore: userIncidentResponseScore,
        backupRecoveryScore: userBackupRecoveryScore,
        trainingAwarenessScore: userTrainingAwarenessScore,
        assetRegisterScore: userAssetRegisterScore,
        crownJewlsScore: userCrownJewlsScore,

        // Placeholder
        placeholder: userPlaceholder,

        children
    } = props;

    // Authentication Variables
    const [auth, setAuth] = useState(clientAuth);

    // Data Variables
    const [orgName, setOrgName] = useState(userOrgName); // Info
    const [companyType, setCompanyType] = useState(userCompanyType); // Info
    const [regAddress, setRegAddress] = useState(userRegAddress); // Info
    const [yearOI, setYearOI] = useState(userYearOI); // Info
    const [sufCyberAttack, setSufCyberAttack] = useState(userSufCyberAttack); // Digital Footprint
    const [attackDetails, setAttackDetails] = useState(userAttackDetails); // ^^
    const [cybInsurance, setCybInsurance] = useState(userCybInsurance); //  Info
    const [insuranceDetails, setInsuranceDetails] = useState(userInsuranceDetails); //^^
    const [itModels, setItModels] = useState(userItModels); // Info
    const [comSize, setComSize] = useState(userComSize); // Info
    const [employees, setEmployees] = useState(userEmployees); // Info
    const [contractors, setContractors] = useState(userContractors); // Info
    const [region, setRegion] = useState(userRegion); // Info
    const [indVert, setIndVert] = useState(userIndVert); // Info
    const [prtCNI, setPrtCNI] = useState(userPrtCNI); // Industry Risk
    const [srvGov, setSrvGov] = useState(userSrvGov); // Industry Risk
    const [srvDef, setSrvDef] = useState(userSrvDef); // Industry Risk
    const [srvCNI, setSrvCNI] = useState(userSrvCNI); // Industry Risk
    const [srvHealth, setSrvHealth] = useState(userSrvHealth); // Industry Risk
    const [reqPCI, setReqPCI] = useState(userReqPCI); // Industry Risk
    const [regICO, setRegICO] = useState(userRegICO); // Info
    const [cybEssCert, setCybEssCert] = useState(userCybEssCert); // Info
    const [gdprAccred, setGdprAccred] = useState(userGdprAccred); // Info
    const [ISOAccred, setISOAccred] = useState(userISOAccred); // Info
    const [otherAccred, setOtherAccred] = useState(userOtherAccred); // Info
    const [otherAccredDetails, setOtherAccredDetails] = useState(userOtherAccredDetails); // Info
    const [devSoftware, setDevSoftware] = useState(userDevSoftware); // Industry Risk
    const [managedServices, setManagedServices] = useState(userManagedServices); // Industry Risk
    const [hostingServices, setHostingServices] = useState(userHostingServices); // Industry Risk
    const [subjectRecords, setSubjectRecords] = useState(userSubjectRecords); //  Info
    const [healthRecords, setHealthRecords] = useState(userHealthRecords); // Industry Risk
    const [processPayments, setProcessPayments] = useState(userProcessPayments); // Industry Risk
    const [website, setWebsite] = useState(userWebsite); // Digital Footprint
    const [linkedIn, setLinkedIn] = useState(userLinkedIn); // Digital Footprint
    const [twitter, setTwitter] = useState(userTwitter); // Digital Footprint
    const [facebook, setFacebook] = useState(userFacebook); // Digital Footprint
    const [instagram, setInstagram] = useState(userInstagram); // Digital Footprint
    const [otherSocials, setOtherSocials] = useState(userOtherSocials); // Info
    const [otherSocialsDetails, setOtherSocialsDetails] = useState(userOtherSocialsDetails); // Info
    const [slack, setSlack] = useState(userSlack); // Info
    const [jira, setJira] = useState(userJira); // Info
    const [trello, setTrello] = useState(userTrello); // Info
    const [otherTools, setOtherTools] = useState(userOtherTools); // Info
    const [otherToolsDetails, setOtherToolsDetails] = useState(userOtherToolsDetails); // Info
    // Governance
    const [individualResponsible, setIndividualResponsible] = useState(userIndividualReponsible); // Governance
    const [responsibleDoc, setResponsibleDoc] = useState(userResponsibleDoc); // Governance
    const [budgetSecurity, setBudgetSecurity] = useState(userBudgetSecurity); // Governance
    const [riskRegister, setRiskRegister] = useState(userRiskRegister); // Risk Management
    const [reviewedLeadership, setReviewedLeadership] = useState(userReviewedLeadership) // Risk Management
    const [riskReviewMeeting, setRiskReviewMeeting] = useState(userRiskReviewMeeting); // Risk Management
    const [riskManagementGuide, setRiskManagementGuide] = useState(userRiskManagementGuide); // Risk Management
    const [documentedStrategy, setDocumentedStrategy] = useState(userDocumentedStrategy); // Risk Management
    const [strategyReviewed, setStrategyReviewed] = useState(userStrategyReviewed); // Risk Management
    const [roadmapLeadership, setRoadmapLeadership] = useState(userRoadmapLeadership); // Risk Management
    const [passwordPolicy, setPasswordPolicy] = useState(userPasswordPolicy); // Policy
    const [securityPolicy, setSecurityPolicy] = useState(userSecurityPolicy); // Policy
    const [acceptableUsePolicy, setAcceptableUsePolicy] = useState(userAcceptableUsePolicy); // Policy
    const [accessManagementPolicy, setAccessManagementPolicy] = useState(userAccessManagementPolicy); // Policy
    const [secureDevicePolicy, setSecureDevicePolicy] = useState(userSecureDevicePolicy); // Policy
    const [remoteWorkingPolicy, setRemoteWorkingPolicy] = useState(userRemoteWorkingPolicy); // Policy
    const [socialMediaPolicy, setSocialMediaPolicy] = useState(userSocialMediaPolicy); // Policy
    const [byodPolicy, setByodPolicy] = useState(userBoydPolicy); // Policy
    const [otherPolicy, setOtherPolicy] = useState(userOtherPolicy); // Policy
    const [policiesUpdated, setPoliciesUpdated] = useState(userPoliciesUpdated); // Policy
    const [policiesToldToStaff, setPoliciesToldToStaff] = useState(userPoliciesToldToStaff); // Policy
    const [dataProtectionOfficer, setDataProtectionOfficer] = useState(userDataProtectionOfficer); // Governanace
    const [riskManagement, setRiskManagement] = useState(userRiskManagement); // Governance
    const [networkSecurity, setNetworkSecurity] = useState(userNetworkSecurity); // Governance
    const [accessControl, setAccessControl] = useState(userAccessControl); // Governance
    const [vulnerabilityManagement, setVulnerabilityManagement] = useState(userVulnerabilityManagement); // Governance
    const [testing, setTesting] = useState(userTesting); // Governance
    const [threatIntelligence, setThreatIntelligence] = useState(userThreatIntelligence); // Governance
    const [incidentResponse, setIncidentResponse] = useState(userIncidentResponse); // Governance
    const [backupRecovery, setBackupRecovery] = useState(userBackupRecovery); // Governance
    const [trainingAwareness, setTrainingAwareness] = useState(userTrainingAwareness); // Governance
    const [assetRegister, setAsssetRegister] = useState(userAssetRegister);
    const [crownJewls, setCrownJewls] = useState(userCrownJewls);
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
    const [websiteScore, setWebsiteScore] = useState(userWebsiteScore);
    const [linkedInScore, setLinkedInScore] = useState(userLinkedInScore);
    const [twitterScore, setTwitterScore] = useState(userTwitterScore);
    const [facebookScore, setFacebookScore] = useState(userFacebookScore);
    const [instagramScore, setInstagramScore] = useState(userInstagramScore);
    // Governance
    const [individualResponsibleScore, setIndividualResponsibleScore] = useState(userIndividualReponsibleScore);
    const [responsibleDocScore, setResponsibleDocScore] = useState(userResponsibleDocScore);
    const [riskRegisterScore, setRiskRegisterScore] = useState(userRiskRegisterScore);
    const [reviewedLeadershipScore, setReviewedLeadershipScore] = useState(userReviewedLeadershipScore);
    const [riskReviewMeetingScore, setRiskReviewMeetingScore] = useState(userRiskReviewMeetingScore);
    const [riskManagementGuideScore, setRiskManagementGuideScore] = useState(userRiskManagementGuideScore);
    const [documentedStrategyScore, setDocumentedStrategyScore] = useState(userDocumentedStrategyScore);
    const [strategyReviewedScore, setStrategyReviewedScore] = useState(userStrategyReviewedScore);
    const [roadmapLeadershipScore, setRoadmapLeadershipScore] = useState(userRoadmapLeadershipScore);
    const [passwordPolicyScore, setPasswordPolicyScore] = useState(userPasswordPolicyScore);
    const [securityPolicyScore, setSecurityPolicyScore] = useState(userSecurityPolicyScore);
    const [acceptableUsePolicyScore, setAcceptableUsePolicyScore] = useState(userAcceptableUsePolicyScore);
    const [accessManagementPolicyScore, setAccessManagementPolicyScore] = useState(userAccessManagementPolicyScore);
    const [secureDevicePolicyScore, setSecureDevicePolicyScore] = useState(userSecureDevicePolicyScore);
    const [remoteWorkingPolicyScore, setRemoteWorkingPolicyScore] = useState(userRemoteWorkingPolicyScore);
    const [socialMediaPolicyScore, setSocialMediaPolicyScore] = useState(userSocialMediaPolicyScore);
    const [byodPolicyScore, setByodPolicyScore] = useState(userBoydPolicyScore);
    const [policiesUpdatedScore, setPoliciesUpdatedScore] = useState(userPoliciesUpdatedScore);
    const [policiesToldToStaffScore, setPoliciesToldToStaffScore] = useState(userPoliciesToldToStaffScore);
    const [dataProtectionOfficerScore, setDataProtectionOfficerScore] = useState(userDataProtectionOfficerScore);
    const [riskManagementScore, setRiskManagementScore] = useState(userRiskManagementScore);
    const [networkSecurityScore, setNetworkSecurityScore] = useState(userNetworkSecurityScore);
    const [accessControlScore, setAccessControlScore] = useState(userAccessControlScore);
    const [vulnerabilityManagementScore, setVulnerabilityManagementScore] = useState(userVulnerabilityManagementScore);
    const [testingScore, setTestingScore] = useState(userTestingScore);
    const [threatIntelligenceScore, setThreatIntelligenceScore] = useState(userThreatIntelligenceScore);
    const [incidentResponseScore, setIncidentResponseScore] = useState(userIncidentResponseScore);
    const [backupRecoveryScore, setBackupRecoveryScore] = useState(userBackupRecoveryScore);
    const [trainingAwarenessScore, setTrainingAwarenessScore] = useState(userTrainingAwarenessScore);
    const [assetRegisterScore, setAsssetRegisterScore] = useState(userAssetRegisterScore);
    const [crownJewlsScore, setCrownJewlsScore] = useState(userCrownJewlsScore);
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
        website,
        setWebsite,
        linkedIn,
        setLinkedIn,
        twitter,
        setTwitter,
        facebook,
        setFacebook,
        instagram,
        setInstagram,
        otherSocials,
        setOtherSocials,
        otherSocialsDetails,
        setOtherSocialsDetails,
        slack,
        setSlack,
        jira,
        setJira,
        trello,
        setTrello,
        otherTools,
        setOtherTools,
        otherToolsDetails,
        setOtherToolsDetails,
        // Governance
        individualResponsible,
        setIndividualResponsible,
        responsibleDoc,
        setResponsibleDoc,
        budgetSecurity,
        setBudgetSecurity,
        riskRegister,
        setRiskRegister,
        reviewedLeadership,
        setReviewedLeadership,
        riskReviewMeeting,
        setRiskReviewMeeting,
        riskManagementGuide,
        setRiskManagementGuide,
        documentedStrategy,
        setDocumentedStrategy,
        strategyReviewed,
        setStrategyReviewed,
        roadmapLeadership,
        setRoadmapLeadership,
        passwordPolicy,
        setPasswordPolicy,
        securityPolicy,
        setSecurityPolicy,
        acceptableUsePolicy,
        setAcceptableUsePolicy,
        accessManagementPolicy,
        setAccessManagementPolicy,
        secureDevicePolicy,
        setSecureDevicePolicy,
        remoteWorkingPolicy,
        setRemoteWorkingPolicy,
        socialMediaPolicy,
        setSocialMediaPolicy,
        byodPolicy,
        setByodPolicy,
        otherPolicy,
        setOtherPolicy,
        policiesUpdated,
        setPoliciesUpdated,
        policiesToldToStaff,
        setPoliciesToldToStaff,
        dataProtectionOfficer,
        setDataProtectionOfficer,
        riskManagement,
        setRiskManagement,
        networkSecurity,
        setNetworkSecurity,
        accessControl,
        setAccessControl,
        vulnerabilityManagement,
        setVulnerabilityManagement,
        testing,
        setTesting,
        threatIntelligence,
        setThreatIntelligence,
        incidentResponse,
        setIncidentResponse,
        backupRecovery,
        setBackupRecovery,
        trainingAwareness,
        setTrainingAwareness,
        assetRegister,
        setAsssetRegister,
        crownJewls,
        setCrownJewls,
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
        websiteScore,
        setWebsiteScore,
        linkedInScore,
        setLinkedInScore,
        twitterScore,
        setTwitterScore,
        facebookScore,
        setFacebookScore,
        instagramScore,
        setInstagramScore,
        // Governance
        individualResponsibleScore,
        setIndividualResponsibleScore,
        responsibleDocScore,
        setResponsibleDocScore,
        riskRegisterScore,
        setRiskRegisterScore,
        reviewedLeadershipScore,
        setReviewedLeadershipScore,
        riskReviewMeetingScore,
        setRiskReviewMeetingScore,
        riskManagementGuideScore,
        setRiskManagementGuideScore,
        documentedStrategyScore,
        setDocumentedStrategyScore,
        strategyReviewedScore,
        setStrategyReviewedScore,
        roadmapLeadershipScore,
        setRoadmapLeadershipScore,
        passwordPolicyScore,
        setPasswordPolicyScore,
        securityPolicyScore,
        setSecurityPolicyScore,
        acceptableUsePolicyScore,
        setAcceptableUsePolicyScore,
        accessManagementPolicyScore,
        setAccessManagementPolicyScore,
        secureDevicePolicyScore,
        setSecureDevicePolicyScore,
        remoteWorkingPolicyScore,
        setRemoteWorkingPolicyScore,
        socialMediaPolicyScore,
        setSocialMediaPolicyScore,
        byodPolicyScore,
        setByodPolicyScore,
        policiesUpdatedScore,
        setPoliciesUpdatedScore,
        policiesToldToStaffScore,
        setPoliciesToldToStaffScore,
        dataProtectionOfficerScore,
        setDataProtectionOfficerScore,
        riskManagementScore,
        setRiskManagementScore,
        networkSecurityScore,
        setNetworkSecurityScore,
        accessControlScore,
        setAccessControlScore,
        vulnerabilityManagementScore,
        setVulnerabilityManagementScore,
        testingScore,
        setTestingScore,
        threatIntelligenceScore,
        setThreatIntelligenceScore,
        incidentResponseScore,
        setIncidentResponseScore,
        backupRecoveryScore,
        setBackupRecoveryScore,
        trainingAwarenessScore,
        setTrainingAwarenessScore,
        assetRegisterScore,
        setAsssetRegisterScore,
        crownJewlsScore,
        setCrownJewlsScore,
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
    sufCyberAttack: '',
    attackDetails: '',
    cybInsurance: '',
    insuranceDetails: '',
    itModels: '',
    comSize: '',
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
    website: '',
    linkedIn: '',
    twitter: '',
    facebook: '',
    instagram: '',
    otherSocials: '',
    slack: '',
    jira: '',
    trello: '',
    otherTools: '',
    // Governance
    individualResponsible: '',
    responsibleDoc: '',
    budgetSecurity: '',
    riskRegister: '',
    reviewedLeadership: '',
    riskReviewMeeting: '',
    riskManagementGuide: '',
    documentedStrategy: '',
    strategyReviewed: '',
    roadmapLeadership: '',
    passwordPolicy: '',
    securityPolicy: '',
    acceptableUsePolicy: '',
    accessManagementPolicy: '',
    secureDevicePolicy: '',
    remoteWorkingPolicy: '',
    socialMediaPolicy: '',
    byodPolicy: '',
    otherPolicy: '',
    policiesUpdated: '',
    policiesToldToStaff: '',
    dataProtectionOfficer: '',
    riskManagement: '',
    networkSecurity: '',
    accessControl: '',
    vulnerabilityManagement: '',
    testing: '',
    threatIntelligence: '',
    incidentResponse: '',
    backupRecovery: '',
    trainingAwareness: '',
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
    processPaymentsScore: 0,
    websiteScore: 0,
    linkedInScore: 0,
    twitterScore: 0,
    facebookScore: 0,
    instagramScore: 0,
    // Governance
    individualResponsibleScore: 0,
    responsibleDocScore: 0,
    riskRegisterScore: 0,
    reviewedLeadershipScore: 0,
    riskReviewMeetingScore: 0,
    riskManagementGuideScore: 0,
    documentedStrategyScore: 0,
    strategyReviewedScore: 0,
    roadmapLeadershipScore: 0,
    passwordPolicyScore: 0,
    securityPolicyScore: 0,
    acceptableUsePolicyScore: 0,
    accessManagementPolicyScore: 0,
    secureDevicePolicyScore: 0,
    remoteWorkingPolicyScore: 0,
    socialMediaPolicyScore: 0,
    byodPolicyScore: 0,
    policiesUpdatedScore: 0,
    policiesToldToStaffScore: 0,
    dataProtectionOfficerScore: 0,
    riskManagementScore: 0,
    networkSecurityScore: 0,
    accessControlScore: 0,
    vulnerabilityManagementScore: 0,
    testingScore: 0,
    threatIntelligenceScore: 0,
    incidentResponseScore: 0,
    backupRecoveryScore: 0,
    trainingAwarenessScore: 0,
    // Placeholder
    placeholder: 0,
};

export default Provider;