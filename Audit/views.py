# from django.shortcuts import render

# Create your views here.
import jwt
from rest_framework.views import APIView
from django.http import HttpResponse
from .models import (industryriskmodel, infomodel, digitalFootprintmodel, cyberaudit, governancemodel,
                     riskManagementmodel, policymodel, trainingmodel, IAMmodel, DataProtectionmodel, Backupmodel)
from django.contrib.auth.models import User
from .serializers import (digitalFootprintserializer, industryRiskserializer,
                          infoserializer, governanceserializer,
                          riskManagementSerializer, policySerializer,
                          trainingserializer, IAMSerial, DPSerial, BUSerial)
from rest_framework.response import Response


class cyberauditview(APIView):
    InfoSerialzer = infoserializer
    digitalFootprintSerializer = digitalFootprintserializer
    industryRiskSerialzer = industryRiskserializer
    governanceserializer = governanceserializer
    RSserial = riskManagementSerializer
    PSerial = policySerializer
    Tserial = trainingserializer
    IAMSeriali = IAMSerial
    DPSeriali = DPSerial
    BackupSeriali = BUSerial

    @staticmethod
    def authcall(request):
        token = request.COOKIES.get('jwt')
        if not token:
            return HttpResponse("NO COOKIE", content_type="text/plain", status=400)

        try:
            data = jwt.decode(token, "secret", algorithms=["HS256"])
            print('DECODED')
        except:
            return HttpResponse("COOKIE DAMAGED", content_type='text/plain', status=400)
        user = User.objects.get(id=data['id'])
        return user

    def post(self, request):
        user = self.authcall(request)  # Made into function however testing required
        infoSerializerInstance = self.InfoSerialzer(data=request.data['info'])
        print(request.data['info'])
        if infoSerializerInstance.is_valid():
            infomodelinstance = \
                infomodel(totalScoreAvailable=infoSerializerInstance.validated_data.get('totalScoreAvailable'),
                          orgName=infoSerializerInstance.validated_data.get('orgName'),
                          regAddress=infoSerializerInstance.validated_data.get('regAddress'),
                          companyType=infoSerializerInstance.validated_data.get('companyType'),
                          yearOI=infoSerializerInstance.validated_data.get('yearOI'),
                          reqPCI=infoSerializerInstance.validated_data.get('reqPCI'),
                          regICO=infoSerializerInstance.validated_data.get('regICO'),
                          gdprAccred=infoSerializerInstance.validated_data.get('gdprAccred'),
                          ISOAccred=infoSerializerInstance.validated_data.get('ISOAccred'),
                          otherAccred=infoSerializerInstance.validated_data.get('otherAccred'),
                          otherAccredDetails=infoSerializerInstance.validated_data.get('otherAccredDetails'),
                          cybInsurance=infoSerializerInstance.validated_data.get('cybInsurance'),
                          insuranceDetails=infoSerializerInstance.validated_data.get('insuranceDetails'),
                          itModels=infoSerializerInstance.validated_data.get('itModels'),
                          comSize=infoSerializerInstance.validated_data.get('comSize'),
                          employees=infoSerializerInstance.validated_data.get('employees'),
                          contractors=infoSerializerInstance.validated_data.get('contractors'),
                          region=infoSerializerInstance.validated_data.get('region'),
                          indVert=infoSerializerInstance.validated_data.get('indVert'),
                          subjectRecords=infoSerializerInstance.validated_data.get('subjectRecords'),
                          otherSocials=infoSerializerInstance.validated_data.get('otherSocials'),
                          otherSocialsDetails=infoSerializerInstance.validated_data.get('otherSocialsDetails'),
                          slack=infoSerializerInstance.validated_data.get('slack'),
                          jira=infoSerializerInstance.validated_data.get('jira'),
                          trello=infoSerializerInstance.validated_data.get('trello'),
                          otherTools=infoSerializerInstance.validated_data.get('otherTools'),
                          otherToolsDetails=infoSerializerInstance.validated_data.get('otherToolsDetails'),
                          otherPolicy=infoSerializerInstance.validated_data.get('otherPolicy'))
            infomodelinstance.save()
        else:
            print('Obis Fault')
        # Add all different catorgies before creating cyberaudit

        digitalFootprintSerializerInstance = self.digitalFootprintSerializer(data=request.data['digitalFootprint'])
        if digitalFootprintSerializerInstance.is_valid():
            digitalFootprintmodelistance = \
                digitalFootprintmodel(
                    totalScoreAvailable=digitalFootprintSerializerInstance.validated_data.get('totalScoreAvailable'),
                    cybAttackScore=digitalFootprintSerializerInstance.validated_data.get('cybAttackScore'),
                    sufCyberAttack=digitalFootprintSerializerInstance.validated_data.get('sufCyberAttack'),
                    websiteScore=digitalFootprintSerializerInstance.validated_data.get('websiteScore'),
                    website=digitalFootprintSerializerInstance.validated_data.get('website'),
                    linkedInScore=digitalFootprintSerializerInstance.validated_data.get('linkedInScore'),
                    linkedIn=digitalFootprintSerializerInstance.validated_data.get('linkedIn'),
                    twitterScore=digitalFootprintSerializerInstance.validated_data.get('twitterScore'),
                    twitter=digitalFootprintSerializerInstance.validated_data.get('twitter'),
                    facebookScore=digitalFootprintSerializerInstance.validated_data.get('facebookScore'),
                    facebook=digitalFootprintSerializerInstance.validated_data.get('facebook'),
                    instagramScore=digitalFootprintSerializerInstance.validated_data.get('instagramScore'),
                    intagram=digitalFootprintSerializerInstance.validated_data.get('intagram'))

            digitalFootprintmodelistance.save()

        industryRiskSerializerInstance = self.industryRiskSerialzer(data=request.data['industryRisk'])
        if industryRiskSerializerInstance.is_valid():
            industryriskmodelInstance = \
                industryriskmodel(
                    totalScoreAvailable=industryRiskSerializerInstance.data.get('totalScoreAvailable'),
                    prtCNIScore=industryRiskSerializerInstance.data.get('prtCNIScore'),
                    prtCNI=industryRiskSerializerInstance.data.get('prtCNI'),
                    srvGovScore=industryRiskSerializerInstance.data.get('srvGovScore'),
                    srvGov=industryRiskSerializerInstance.data.get('srvGov'),
                    srvDefScore=industryRiskSerializerInstance.data.get('srvDefScore'),
                    srvDef=industryRiskSerializerInstance.data.get('srvDef'),
                    srvCNIScore=industryRiskSerializerInstance.data.get('srvCNIScore'),
                    srvCNI=industryRiskSerializerInstance.data.get('srvCNI'),
                    srvHealthScore=industryRiskSerializerInstance.data.get('srvHealthScore'),
                    srvHealth=industryRiskSerializerInstance.data.get('srvHealth'),
                    reqPCIScore=industryRiskSerializerInstance.data.get('reqPCIScore'),
                    reqPCI=industryRiskSerializerInstance.data.get('reqPCI'),
                    devSoftwareScore=industryRiskSerializerInstance.data.get('devSoftwareScore'),
                    devSoftware=industryRiskSerializerInstance.data.get('devSoftware'),
                    managedServicesScore=industryRiskSerializerInstance.data.get('managedServicesScore'),
                    managedServices=industryRiskSerializerInstance.data.get('managedServices'),
                    hostingServicesScore=industryRiskSerializerInstance.data.get('hostingServicesScore'),
                    hostingServices=industryRiskSerializerInstance.data.get('hostingServices'),
                    healthRecordsScore=industryRiskSerializerInstance.data.get('healthRecordsScore'),
                    healthRecords=industryRiskSerializerInstance.data.get('healthRecords'),
                    processPaymentsScore=industryRiskSerializerInstance.data.get('processPaymentsScore'),
                    processPayments=industryRiskSerializerInstance.data.get('processPayments'))
            industryriskmodelInstance.save()

            governanceserializerinstance = self.governanceserializer(data=request.data['governance'])
            if governanceserializerinstance.is_valid():
                governancemodelinstance = \
                    governancemodel(
                        totalScoreAvailable=governanceserializerinstance.validated_data.get('totalScoreAvailable'),
                        individualResponsibleScore=governanceserializerinstance.validated_data.get('individualResponsibleScore'),
                        individualResponsible=governanceserializerinstance.validated_data.get('individualResponsible'),
                        responsibleDocScore=governanceserializerinstance.validated_data.get('responsibleDocScore'),
                        responsibleDoc=governanceserializerinstance.validated_data.get('responsibleDoc'),
                        budgetSecurityScore=governanceserializerinstance.validated_data.get('budgetSecurityScore'),
                        budgetSecurity=governanceserializerinstance.validated_data.get('budgetSecurity'),
                        dataProtectionOfficerScore=governanceserializerinstance.validated_data.get('dataProtectionOfficerScore'),
                        dataProtectionOfficer=governanceserializerinstance.validated_data.get('dataProtectionOfficer'),
                        riskManagementScore=governanceserializerinstance.validated_data.get('riskManagementScore'),
                        riskManagement=governanceserializerinstance.validated_data.get('riskManagement'),
                        networkSecurityScore=governanceserializerinstance.validated_data.get('networkSecurityScore'),
                        networkSecurity=governanceserializerinstance.validated_data.get('networkSecurity'),
                        accessControlScore=governanceserializerinstance.validated_data.get('accessControlScore'),
                        accessControl=governanceserializerinstance.validated_data.get('accessControl'),
                        vulnerabilityManagementScore=governanceserializerinstance.validated_data.get('vulnerabilityManagementScore'),
                        vulnerabilityManagement=governanceserializerinstance.validated_data.get('vulnerabilityManagement'),
                        testingScore=governanceserializerinstance.validated_data.get('testingScore'),
                        testing=governanceserializerinstance.validated_data.get('testing'),
                        threatIntelligenceScore=governanceserializerinstance.validated_data.get('threatIntelligenceScore'),
                        threatIntelligence=governanceserializerinstance.validated_data.get('threatIntelligence'),
                        incidentResponseScore=governanceserializerinstance.validated_data.get('incidentResponseScore'),
                        incidentResponse=governanceserializerinstance.validated_data.get('incidentResponse'),
                        backupRecoveryScore=governanceserializerinstance.validated_data.get('backupRecoveryScore'),
                        backupRecovery=governanceserializerinstance.validated_data.get('backupRecovery'),
                        trainingAwarenessScore=governanceserializerinstance.validated_data.get('trainingAwarenessScore'),
                        trainingAwareness=governanceserializerinstance.validated_data.get('trainingAwareness'),
                        systemsDataScore=governanceserializerinstance.validated_data.get('systemsDataScore'),
                        systemsData=governanceserializerinstance.validated_data.get('systemsData'),
                        obsoleteUserScore=governanceserializerinstance.validated_data.get('obsoleteUserScore'),
                        obsoleteUser=governanceserializerinstance.validated_data.get('obsoleteUser'),
                        infoClassificationScore=governanceserializerinstance.validated_data.get('infoClassificationScore'),
                        infoClassification=governanceserializerinstance.validated_data.get('infoClassification'),
                        dataFlowsScore=governanceserializerinstance.validated_data.get('dataFlowsScore'),
                        dataFlows=governanceserializerinstance.validated_data.get('dataFlows'),
                        passwordAuditsScore=governanceserializerinstance.validated_data.get('passwordAuditsScore'),
                        passwordAudits=governanceserializerinstance.validated_data.get('passwordAudits'),
                        dataBreachesICOScore=governanceserializerinstance.validated_data.get('dataBreachesICOScore'),
                        dataBreachesICO=governanceserializerinstance.validated_data.get('dataBreachesICO'))
                governancemodelinstance.save()

            RSserialInstnace = self.RSserial(data=request.data['riskManagement'])
            if RSserialInstnace.is_valid():
                RSmodellInstnace = \
                    riskManagementmodel(
                        totalScoreAvailable=RSserialInstnace.validated_data.get('totalScoreAvailable'),
                        riskRegisterScore=RSserialInstnace.validated_data.get('riskRegisterScore'),
                        riskRegister=RSserialInstnace.validated_data.get('riskRegister'),
                        reviewedLeadershipScore=RSserialInstnace.validated_data.get('reviewedLeadershipScore'),
                        reviewedLeadership=RSserialInstnace.validated_data.get('reviewedLeadership'),
                        riskReviewMeetingScore=RSserialInstnace.validated_data.get('riskReviewMeetingScore'),
                        riskReviewMeeting=RSserialInstnace.validated_data.get('riskReviewMeeting'),
                        riskManagementGuideScore=RSserialInstnace.validated_data.get('riskManagementGuideScore'),
                        riskManagementGuide=RSserialInstnace.validated_data.get('riskManagementGuide'),
                        documentedStrategyScore=RSserialInstnace.validated_data.get('documentedStrategyScore'),
                        documentedStrategy=RSserialInstnace.validated_data.get('documentedStrategy'),
                        strategyReviewedScore=RSserialInstnace.validated_data.get('strategyReviewedScore'),
                        strategyReviewed=RSserialInstnace.validated_data.get('strategyReviewed'),
                        roadmapLeadershipScore=RSserialInstnace.validated_data.get('roadmapLeadershipScore'),
                        roadmapLeadership=RSserialInstnace.validated_data.get('roadmapLeadership'),
                        assetRegisterScore=RSserialInstnace.validated_data.get('assetRegisterScore'),
                        assetRegister=RSserialInstnace.validated_data.get('assetRegister'),
                        crownJewlsScore=RSserialInstnace.validated_data.get('crownJewlsScore'),
                        crownJewls=RSserialInstnace.validated_data.get('crownJewls'))
                RSmodellInstnace.save()

        PSerialInstance = self.PSerial(data=request.data['policy'])
        if PSerialInstance.is_valid():
            PModellInstance = \
                policymodel(
                    totalScoreAvailable=PSerialInstance.validated_data.get('totalScoreAvailable'),
                    passwordPolicyScore=PSerialInstance.validated_data.get('passwordPolicyScore'),
                    complexityReqPassScore=PSerialInstance.validated_data.get('complexityReqPassScore'),
                    complexityReqPass=PSerialInstance.validated_data.get('complexityReqPass'),
                    passwordPolicy=PSerialInstance.validated_data.get('passwordPolicy'),
                    securityPolicyScore=PSerialInstance.validated_data.get('securityPolicyScore'),
                    securityPolicy=PSerialInstance.validated_data.get('securityPolicy'),
                    acceptableUsePolicyScore=PSerialInstance.validated_data.get('acceptableUsePolicyScore'),
                    acceptableUsePolicy=PSerialInstance.validated_data.get('acceptableUsePolicy'),
                    accessManagementPolicyScore=PSerialInstance.validated_data.get('accessManagementPolicyScore'),
                    accessManagementPolicy=PSerialInstance.validated_data.get('accessManagementPolicy'),
                    secureDevicePolicyScore=PSerialInstance.validated_data.get('secureDevicePolicyScore'),
                    secureDevicePolicy=PSerialInstance.validated_data.get('secureDevicePolicy'),
                    remoteWorkingPolicyScore=PSerialInstance.validated_data.get('remoteWorkingPolicyScore'),
                    remoteWorkingPolicy=PSerialInstance.validated_data.get('remoteWorkingPolicy'),
                    socialMediaPolicyScore=PSerialInstance.validated_data.get('socialMediaPolicyScore'),
                    socialMediaPolicy=PSerialInstance.validated_data.get('socialMediaPolicy'),
                    byodPolicyScore=PSerialInstance.validated_data.get('byodPolicyScore'),
                    byodPolicy=PSerialInstance.validated_data.get('byodPolicy'),
                    policiesUpdatedScore=PSerialInstance.validated_data.get('policiesUpdatedScore'),
                    policiesUpdated=PSerialInstance.validated_data.get('policiesUpdated'),
                    policiesToldToStaffScore=PSerialInstance.validated_data.get('policiesToldToStaffScore'),
                    policiesToldToStaff=PSerialInstance.validated_data.get('policiesToldToStaff'),
                    onBoardingStaffScore=PSerialInstance.validated_data.get('onBoardingStaffScore'),
                    onBoardingStaff=PSerialInstance.validated_data.get('onBoardingStaffScore'),
                    complexReqAdminPassScore=PSerialInstance.validated_data.get('complexReqAdminPassScore'),
                    complexReqAdminPass=PSerialInstance.validated_data.get('complexReqAdminPass'),
                    offBoardingStaffScore=PSerialInstance.validated_data.get('offBoardingStaffScore'),
                    offBoardingStaff=PSerialInstance.validated_data.get('offBoardingStaff'),
                    handlingPoliciesScore=PSerialInstance.validated_data.get('handlingPoliciesScore'),
                    handlingPolicies=PSerialInstance.validated_data.get('handlingPolicies'))
            PModellInstance.save()

            TserialInstance = self.Tserial(data=request.data['training'])
            if TserialInstance.is_valid():
                TmodelInstance = \
                    trainingmodel(
                        totalScoreAvailable=TserialInstance.validated_data.get('totalScoreAvailable'),
                        staffTrainingScore=TserialInstance.validated_data.get('staffTrainingScore'),
                        staffTraining=TserialInstance.validated_data.get('staffTraining'),
                        staffTrainingUpdatesScore=TserialInstance.validated_data.get('staffTrainingUpdatesScore'),
                        staffTrainingUpdates=TserialInstance.validated_data.get('staffTrainingUpdates'),
                        phishingTrainingScore=TserialInstance.validated_data.get('phishingTrainingScore'),
                        phishingTraining=TserialInstance.validated_data.get('phishingTraining'),
                        passwordTrainingScore=TserialInstance.validated_data.get('passwordTrainingScore'),
                        passwordTraining=TserialInstance.validated_data.get('passwordTraining'),
                        secureWorkingTrainingScore=TserialInstance.validated_data.get('secureWorkingTrainingScore'),
                        secureWorkingTraining=TserialInstance.validated_data.get('secureWorkingTraining'),
                        protectionTrainingScore=TserialInstance.validated_data.get('protectionTrainingScore'),
                        protectionTraining=TserialInstance.validated_data.get('protectionTraining'),
                        securityIncidentTrainingScore=TserialInstance.validated_data.get('securityIncidentTrainingScore'),
                        securityIncidentTraining=TserialInstance.validated_data.get('securityIncidentTraining'),
                        emailTrainingScore=TserialInstance.validated_data.get('emailTrainingScore'),
                        emailTraining=TserialInstance.validated_data.get('emailTraining'),
                        socialMediaTrainingScore=TserialInstance.validated_data.get('socialMediaTrainingScore'),
                        socialMediaTraining=TserialInstance.validated_data.get('socialMediaTraining'))
                TmodelInstance.save()

            IAMSerialInstance = self.IAMSeriali(data=request.data['IAM'])
            if IAMSerialInstance.is_valid():
                IAMmodelInstance = \
                    IAMmodel(
                        totalScoreAvailable=IAMSerialInstance.validated_data.get('totalScoreAvailable'),
                        dataRestrictionScore=IAMSerialInstance.validated_data.get('dataRestrictionScore'),
                        dataRestriction=IAMSerialInstance.validated_data.get('dataRestriction'),
                        confidentialInfoScore=IAMSerialInstance.validated_data.get('confidentialInfoScore'),
                        confidentialInfo=IAMSerialInstance.validated_data.get('confidentialInfo'),
                        administratorAccessScore=IAMSerialInstance.validated_data.get('administratorAccessScore'),
                        administratorAccess=IAMSerialInstance.validated_data.get('administratorAccess'),
                        limitAdminAccessScore=IAMSerialInstance.validated_data.get('limitAdminAccessScore'),
                        limitAdminAccess=IAMSerialInstance.validated_data.get('limitAdminAccess'),
                        adminRestrictionScore=IAMSerialInstance.validated_data.get('adminRestrictionScore'),
                        adminRestriction=IAMSerialInstance.validated_data.get('adminRestriction'),
                        generateAlertsScore=IAMSerialInstance.validated_data.get('generateAlertsScore'),
                        generateAlerts=IAMSerialInstance.validated_data.get('generateAlerts'),
                        passwordManagementScore=IAMSerialInstance.validated_data.get('passwordManagementScore'),
                        passwordManagement=IAMSerialInstance.validated_data.get('passwordManagement'),
                        authenticationScore=IAMSerialInstance.validated_data.get('authenticationScore'),
                        authentication=IAMSerialInstance.validated_data.get('authentication'),
                        twoFacAuthScore=IAMSerialInstance.validated_data.get('twoFacAuthScore'),
                        twoFacAuth=IAMSerialInstance.validated_data.get('twoFacAuth'),
                        lockoutScore=IAMSerialInstance.validated_data.get('lockoutScore'),
                        lockout=IAMSerialInstance.validated_data.get('lockout'),
                        noDefaultPassScore=IAMSerialInstance.validated_data.get('noDefaultPassScore'),
                        noDefaultPass=IAMSerialInstance.validated_data.get('noDefaultPass'),
                        rolebaseAccessControlScore=IAMSerialInstance.validated_data.get('rolebaseAccessControlScore'),
                        rolebaseAccessControl=IAMSerialInstance.validated_data.get('rolebaseAccessControl'))
                IAMmodelInstance.save()

            DPSerialInstance = self.DPSeriali(data=request.data['DataProtection'])
            if DPSerialInstance.is_valid():
                DPModelInstance = DataProtectionmodel \
                    (totalScoreAvailable=DPSerialInstance.validated_data.get('totalScoreAvailable'),
                     encryptStorageScore=DPSerialInstance.validated_data.get('encryptStorageScore'),
                     encryptStorage=DPSerialInstance.validated_data.get('encryptStorage'),
                     transitDataProtectionScore=DPSerialInstance.validated_data.get('transitDataProtectionScore'),
                     transitDataProtection=DPSerialInstance.validated_data.get('transitDataProtection'),
                     restDataProtectionScore=DPSerialInstance.validated_data.get('restDataProtectionScore'),
                     restDataProtection=DPSerialInstance.validated_data.get('restDataProtection'),
                     dataLossPreventionScore=DPSerialInstance.validated_data.get('dataLossPreventionScore'),
                     dataLossPrevention=DPSerialInstance.validated_data.get('dataLossPrevention'),
                     wipeRetiredDevicesScore=DPSerialInstance.validated_data.get('wipeRetiredDevicesScore'),
                     wipeRetiredDevies=DPSerialInstance.validated_data.get('wipeRetiredDevies'),
                     domainBreachesScore=DPSerialInstance.validated_data.get('domainBreachesScore'),
                     domainBreaches=DPSerialInstance.validated_data.get('domainBreaches'),
                     breachedCredentialsScore=DPSerialInstance.validated_data.get('breachedCredentialsScore'),
                     breachedCredentials=DPSerialInstance.validated_data.get('breachedCredentials'),
                     dataProtectionFinalScore=DPSerialInstance.validated_data.get('dataProtectionFinalScore'),
                     dataProtectionFinal=DPSerialInstance.validated_data.get('dataProtectionFinal'))
                DPModelInstance.save()

            BackupSerialInstance = self.BackupSeriali(data=request.data['Backups'])
            if BackupSerialInstance.is_valid():
                BackupModelInstance = Backupmodel \
                    (totalScoreAvailable=BackupSerialInstance.validated_data.get('totalScoreAvailable'),
                     criticalDataBakupScore=BackupSerialInstance.validated_data.get('criticalDataBakupScore'),
                     criticalDataBakup=BackupSerialInstance.validated_data.get('criticalDataBakup'),
                     offSiteBackupScore=BackupSerialInstance.validated_data.get('offSiteBackupScore'),
                     offSiteBackup=BackupSerialInstance.validated_data.get('offSiteBackup'),
                     encryptedBackupScore=BackupSerialInstance.validated_data.get('encryptedBackupScore'),
                     encryptedBackup=BackupSerialInstance.validated_data.get('encryptedBackup'),
                     offDomainBackupScore=BackupSerialInstance.validated_data.get('offDomainBackupScore'),
                     offDomainBackup=BackupSerialInstance.validated_data.get('offDomainBackup'))
                BackupModelInstance.save()

        CyberAudit = cyberaudit(user=user,
                                infofield=infomodelinstance,
                                digitalFootprintfield=digitalFootprintmodelistance,
                                industryriskfield=industryriskmodelInstance,
                                governancefield=governancemodelinstance,
                                riskManagementfield=RSmodellInstnace,
                                policyfield=PModellInstance,
                                trainingfield=TmodelInstance,
                                IAMfield=IAMmodelInstance,
                                DataProtectionfield=DPModelInstance,
                                Backupfield=BackupModelInstance)
        CyberAudit.save()

        print(user.cyberaudit.infofield.orgName)  # works now do this for all the different models
        return Response(data=user.cyberaudit.trainingfield.staffTrainingScore)
        # Do whatever past here TEST CODE ON WIN PC

        # Create Cyber audit model before serialization of answer
    # Final
