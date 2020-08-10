public with sharing class CaseController {
    public CaseController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getAllCases(String subject){
            string key='%' +subject+ '%';
            List<Case> caseList=[select id,subject,description,status,origin from Case where subject like: key];
            /*
                select id,subject from case where subject like '%su%'
            */
           return caseList;
    }
}
