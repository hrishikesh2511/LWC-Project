public with sharing class lookupController {
    public lookupController() {

    }

    /*
        string onjectName;
        string FieldApiName;
        string searchValue;
    */

    @AuraEnabled()
    public static List<sObject> findRecords(string objectName,string fieldApiName,string searchValue){
        
        String key = '%' + searchValue + '%';
        String Query = 'Select Id, '+fieldApiName+' FROM '+objectName+' Where '+fieldApiName+ ' LIKE : key';
        List<sObject> sobjectList = Database.query(Query);
        return sobjectList;
        /*String key='%'+searchValue+'%';
        string Query='select Id,'+fieldApiName+' from '+objectName+'where'+fieldApiName+ 'like : key';
        List<sObject> sObjectList=Database.query(Query);
        return sObjectList;*/
        // select id ,name from Account where name like '%a%';
    }
}
