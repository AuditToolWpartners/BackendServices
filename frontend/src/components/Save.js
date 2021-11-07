import React from 'react';

import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import axios from "axios";
import {StoreContext} from "../pages/Audit/constantStore";
// noinspection ES6CheckImport
import {store} from "react-notifications-component";
import Button from "@material-ui/core/Button";

const saved = () => {
    store.addNotification({
        title: "Success!",
        message: "You've successfully saved your details!",
        type: "success",
        container: "top-left",
        insert: "top",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 10000,
            onScreen: true
        }
    });
}

const failed = () => {
    store.addNotification({
        title: "Oops!",
        message: "Error [Placeholder] - Unable to save!",
        type: "danger",
        container: "top-left",
        insert: "top",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 10000,
            onScreen: true
        }
    });
}

const Save = (className, color) => {
    const api = React.useContext(StoreContext);
    axios.defaults.withCredentials = true
    const handleSave = () => {
        const scores = {
            "info": {
                "totalAvailableScore": 0,
                "orgName": api.orgName,
                "regAddress": api.regAddress,
                "companyType": api.companyType,
                "yearOI": api.yearOI,
                "cybInsurance": api.cybInsurance,
                "insuranceDetails": api.insuranceDetails,
                "itModels": api.itModels,
                "comSize": api.comSize,
                "employees": api.employees,
                "contractors": api.contractors,
                "region": api.region,
                "indVert": api.indVert,
                "reqPCI": api.reqPCI,
                "regICO": api.regICO,
                "cybEssCert": api.cybEssCert,
                "gdprAccred": api.gdprAccred,
                "ISOAccred": api.ISOAccred,
                "otherAccred": api.otherAccred,
                "otherAccredDetails": api.otherAccredDetails,
                "subjectRecords": api.subjectRecords,
                "otherSocials": api.otherSocials,
                "otherSocialsDetails": api.otherSocialsDetails,
                "slack": api.slack,
                "jira": api.jira,
                "trello": api.trello,
                "otherTools": api.otherTools,
                "otherToolsDetails": api.otherToolsDetails,
                "otherPolicy": api.otherPolicy,
            },
            "digitalFootprint": {
                "totalAvailableScore": 6,
                "cybAttackScore": api.cybAttackScore,
                "sufCyberAttack": api.sufCyberAttack,
                "websiteScore": api.websiteScore,
                "website": api.website,
                "linkedInScore": api.linkedInScore,
                "linkedIn": api.linkedIn,
                "twitterScore": api.twitterScore,
                "twitter": api.twitter,
                "facebookScore": api.facebookScore,
                "facebook": api.facebook,
                "instagramScore": api.instagramScore,
                "intagram": api.intagram,
            },
            "industryRisk": {
                "totalAvailableScore": 11,
                "prtCNIScore": api.prtCNIScore,
                "prtCNI": api.prtCNI,
                "srvGovScore": api.srvGovScore,
                "srvGov": api.srvGov,
                "srvDefScore": api.srvDefScore,
                "srvDef": api.srvDef,
                "srvCNIScore": api.srvCNIScore,
                "srvCNI": api.srvCNI,
                "srvHealthScore": api.srvHealthScore,
                "srvHealth": api.srvHealth,
                "reqPCIScore": api.reqPCIScore,
                "reqPCI": api.reqPCI,
                "devSoftwareScore": api.devSoftwareScore,
                "devSoftware": api.devSoftware,
                "managedServicesScore": api.managedServicesScore,
                "managedServices": api.managedServices,
                "hostingServicesScore": api.hostingServicesScore,
                "hostingServices": api.hostingServices,
                "healthRecordsScore": api.healthRecordsScore,
                "healthRecords": api.healthRecords,
                "processPaymentsScore": api.processPaymentsScore,
                "processPayments": api.processPayments,
            },
            "governance": {
                "totalScoreAvailable": 13,
                "individualResponsibleScore": api.individualResponsibleScore,
                "individualResponsible": api.individualResponsible,
                "responsibleDocScore": api.responsibleDocScore,
                "responsibleDoc": api.responsibleDoc,
                "budgetSecurityScore": api.budgetSecurityScore,
                "budgetSecurity": api.budgetSecurity,
                "dataProtectionOfficerScore": api.dataProtectionOfficerScore,
                "dataProtectionOfficer": api.dataProtectionOfficer,
                "riskManagementScore": api.riskManagementScore,
                "riskManagement": api.riskManagement,
                "networkSecurityScore": api.networkSecurityScore,
                "networkSecurity": api.networkSecurity,
                "accessControlScore": api.accessControlScore,
                "accessControl": api.accessControl,
                "vulnerabilityManagementScore": api.vulnerabilityManagementScore,
                "vulnerabilityManagement": api.vulnerabilityManagement,
                "testingScore": api.testingScore,
                "testing": api.testing,
                "threatIntelligenceScore": api.threatIntelligenceScore,
                "threatIntelligence": api.threatIntelligence,
                "incidentResponseScore": api.incidentResponseScore,
                "incidentResponse": api.incidentResponse,
                "backupRecoveryScore": api.backupRecoveryScore,
                "backupRecovery": api.backupRecovery,
                "trainingAwarenessScore": api.trainingAwarenessScore,
                "trainingAwareness": api.trainingAwareness,

            },
            "riskManagement": {
                "totalScoreAvailable": 9,
                "riskRegisterScore": api.riskRegisterScore,
                "riskRegister": api.riskRegister,
                "reviewedLeadershipScore": api.reviewedLeadershipScore,
                "reviewedLeadership": api.reviewedLeadership,
                "riskReviewMeetingScore": api.riskReviewMeetingScore,
                "riskReviewMeeting": api.riskReviewMeeting,
                "riskManagementGuideScore": api.riskManagementGuideScore,
                "riskManagementGuide": api.riskManagementGuide,
                "documentedStrategyScore": api.documentedStrategyScore,
                "documentedStrategy": api.documentedStrategy,
                "strategyReviewedScore": api.strategyReviewedScore,
                "strategyReviewed": api.strategyReviewed,
                "roadmapLeadershipScore": api.roadmapLeadershipScore,
                "roadmapLeadership": api.roadmapLeadership,
                "assetRegisterScore": api.assetRegisterScore,
                "assetRegister": api.assetRegister,
                "crownJewlsScore": api.crownJewlsScore,
                "crownJewls": api.crownJewls,
            },
            "policy": {
                "totalScoreAvailable": 10,
                "passwordPolicyScore": api.passwordPolicyScore,
                "passwordPolicy": api.passwordPolicy,
                "securityPolicyScore": api.securityPolicyScore,
                "securityPolicy": api.securityPolicy,
                "acceptableUsePolicyScore": api.acceptableUsePolicyScore,
                "acceptableUsePolicy": api.acceptableUsePolicy,
                "accessManagementPolicyScore": api.accessManagementPolicyScore,
                "accessManagementPolicy": api.accessManagementPolicy,
                "secureDevicePolicyScore": api.secureDevicePolicyScore,
                "secureDevicePolicy": api.secureDevicePolicy,
                "remoteWorkingPolicyScore": api.remoteWorkingPolicyScore,
                "remoteWorkingPolicy": api.remoteWorkingPolicy,
                "socialMediaPolicyScore": api.socialMediaPolicyScore,
                "socialMediaPolicy": api.socialMediaPolicy,
                "byodPolicyScore": api.byodPolicyScore,
                "byodPolicy": api.byodPolicy,
                "policiesUpdatedScore": api.policiesUpdatedScore,
                "policiesUpdated": api.policiesUpdated,
                "policiesToldToStaffScore": api.policiesToldToStaffScore,
                "policiesToldToStaff": api.policiesToldToStaff,
            }
        }

        const config = {
            headers: {
                "Content-type": "application/json",
            }
        }

        axios.post('http://192.168.1.214:8000/audit/cyberaudit/', scores)
            .then(res => {
                console.log(res);
            }).catch(function (error) {
            console.log(error);
        })

        axios.post('http://192.168.227.18:8004/audit/cyberaudit/', scores, config)
            .then(res => {
                console.log(res);
                saved();
            }).catch(function (error) {
            console.log(error);
            failed();
        })
        saved()

    }
    return (
        <Button
            onClick={handleSave}
            className={className}
            color={color}
            variant="contained"
            endIcon={<SaveOutlinedIcon />}
        >
            Save
        </Button>
    )
}
export default Save;