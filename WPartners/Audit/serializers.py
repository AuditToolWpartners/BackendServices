from rest_framework import serializers
from .models import(infomodel, digitalFootprintmodel,
                    industryriskmodel, governancemodel,
                    riskManagementmodel, policymodel,
                    trainingmodel, IAMmodel,
                    DataProtectionmodel, Backupmodel)


class infoserializer(serializers.ModelSerializer):
    class Meta:
        model = infomodel
        fields = ('totalScoreAvailable', 'orgName',
                  'regAddress', 'companyType',
                  'yearOI', 'reqPCI',
                  'regICO', 'cybEssCert',
                  'cybEssCert', 'cybEssCert',
                  'otherAccred', 'otherAccredDetails',
                  'ISOAccred', 'gdprAccred',
                  'itModels', 'comSize',
                  'employees', 'contractors',
                  'region', 'indVert',
                  'cybInsurance', 'insuranceDetails',
                  'subjectRecords', 'otherSocials',
                  'otherSocialsDetails', 'slack',
                  'jira', 'trello',
                  'otherTools', 'otherToolsDetails',
                  'otherPolicy')


class digitalFootprintserializer(serializers.ModelSerializer):
    class Meta:
        model = digitalFootprintmodel
        fields = ('totalScoreAvailable',
                  'cybAttackScore', 'sufCyberAttack',
                  'websiteScore', 'website',
                  'linkedInScore', 'linkedIn',
                  'twitterScore', 'twitter',
                  'facebookScore', 'facebook',
                  'instagramScore', 'intagram')


class industryRiskserializer(serializers.ModelSerializer):
    class Meta:
        model = industryriskmodel
        fields = ('totalScoreAvailable',
                  'prtCNIScore', 'prtCNI',
                  'srvGovScore', 'srvGov',
                  'srvDefScore', 'srvDef',
                  'srvCNIScore', 'srvCNI',
                  'srvHealthScore', 'srvHealth',
                  'reqPCIScore', 'reqPCI',
                  'devSoftwareScore', 'devSoftware',
                  'managedServicesScore', 'managedServices',
                  'hostingServicesScore', 'hostingServices',
                  'healthRecordsScore', 'healthRecords',
                  'processPaymentsScore', 'processPayments')


class governanceserializer(serializers.ModelSerializer):
    class Meta:
        model = governancemodel
        fields = ('totalScoreAvailable',
                  'individualResponsibleScore', 'individualResponsible',
                  'responsibleDocScore', 'responsibleDoc',
                  'budgetSecurityScore', 'budgetSecurity',
                  'dataProtectionOfficerScore', 'dataProtectionOfficer',
                  'riskManagementScore', 'riskManagement',
                  'networkSecurityScore', 'networkSecurity',
                  'accessControlScore', 'accessControl',
                  'vulnerabilityManagementScore', 'vulnerabilityManagement',
                  'testingScore', 'testing',
                  'threatIntelligenceScore', 'threatIntelligence',
                  'incidentResponseScore', 'incidentResponse',
                  'backupRecoveryScore', 'backupRecovery',
                  'trainingAwarenessScore', 'trainingAwareness',
                  'systemsDataScore', 'systemsData',
                  'obsoleteUserScore', 'obsoleteUser',
                  'infoClassificationScore', 'infoClassification',
                  'dataFlowsScore', 'dataFlows',
                  'passwordAuditsScore', 'passwordAudits',
                  'dataBreachesICOScore', 'dataBreachesICO')


class riskManagementSerializer(serializers.ModelSerializer):
    class Meta:

        model = riskManagementmodel
        fields = ('totalScoreAvailable',
                  'riskRegisterScore', 'riskRegister',
                  'reviewedLeadershipScore', 'reviewedLeadership',
                  'riskReviewMeetingScore', 'riskReviewMeeting',
                  'riskManagementGuideScore', 'riskManagementGuide',
                  'documentedStrategyScore', 'documentedStrategy',
                  'strategyReviewedScore', 'strategyReviewed',
                  'roadmapLeadershipScore', 'roadmapLeadership',
                  'assetRegisterScore', 'assetRegister',
                  'crownJewlsScore', 'crownJewls')


class policySerializer(serializers.ModelSerializer):
    class Meta:
        model = policymodel
        fields = ('totalScoreAvailable',
                  'passwordPolicyScore', 'passwordPolicy',
                  'securityPolicyScore', 'securityPolicy',
                  'acceptableUsePolicyScore', 'acceptableUsePolicy',
                  'accessManagementPolicyScore', 'accessManagementPolicy',
                  'secureDevicePolicyScore', 'secureDevicePolicy',
                  'remoteWorkingPolicyScore', 'remoteWorkingPolicy',
                  'socialMediaPolicyScore', 'socialMediaPolicy',
                  'byodPolicyScore', 'byodPolicy',
                  'policiesUpdatedScore', 'policiesUpdated',
                  'policiesToldToStaffScore', 'policiesToldToStaff',
                  'complexityReqPassScore', 'complexityReqPass',
                  'onBoardingStaffScore', 'onBoardingStaff',
                  'offBoardingStaffScore', 'offBoardingStaff',
                  'handlingPoliciesScore', 'handlingPolicies',
                  'complexReqAdminPassScore', 'complexReqAdminPass')


class trainingserializer(serializers.ModelSerializer):
    class Meta:
        model = trainingmodel
        fields = ('totalScoreAvailable',
                  'staffTrainingScore', 'staffTraining',
                  'staffTrainingUpdatesScore', 'staffTrainingUpdates',
                  'phishingTrainingScore', 'phishingTraining',
                  'passwordTrainingScore', 'passwordTraining',
                  'secureWorkingTrainingScore', 'secureWorkingTraining',
                  'protectionTrainingScore', 'protectionTraining',
                  'securityIncidentTrainingScore', 'securityIncidentTraining',
                  'emailTrainingScore', 'emailTraining',
                  'socialMediaTrainingScore', 'socialMediaTraining')


class IAMSerial(serializers.ModelSerializer):
    class Meta:
        model = IAMmodel
        fields = ('totalScoreAvailable',
                  'dataRestrictionScore', 'dataRestriction',
                  'confidentialInfoScore', 'confidentialInfo',
                  'administratorAccessScore', 'administratorAccess',
                  'limitAdminAccessScore', 'limitAdminAccess',
                  'adminRestrictionScore', 'adminRestriction',
                  'generateAlertsScore', 'generateAlerts',
                  'passwordManagementScore', 'passwordManagement',
                  'authenticationScore', 'authentication',
                  'twoFacAuthScore', 'twoFacAuth',
                  'lockoutScore', 'lockout',
                  'noDefaultPassScore', 'noDefaultPass',
                  'rolebaseAccessControlScore','rolebaseAccessControl')


class DPSerial(serializers.ModelSerializer):
    class Meta:
        model = DataProtectionmodel
        fields = ('totalScoreAvailable',
                  'encryptStorageScore', 'encryptStorage',
                  'transitDataProtectionScore', 'transitDataProtection',
                  'restDataProtectionScore', 'restDataProtection',
                  'dataLossPreventionScore', 'dataLossPrevention',
                  'wipeRetiredDevicesScore', 'wipeRetiredDevies',
                  'domainBreachesScore', 'domainBreaches',
                  'breachedCredentialsScore', 'breachedCredentials',
                  'dataProtectionFinalScore', 'dataProtectionFinal')


class BUSerial(serializers.ModelSerializer):
    class Meta:
        model = Backupmodel
        fields = ('totalScoreAvailable',
                  'criticalDataBakupScore', 'criticalDataBakup',
                  'offSiteBackupScore', 'offSiteBackup',
                  'encryptedBackupScore', 'encryptedBackup',
                  'offDomainBackupScore', 'offDomainBackup')
