public with sharing class BeerController {
    //Constructor of the Class
    public BeerController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<sObject> searchBeer(string searchParam){

        String likeParam= '%' +searchParam+'%';
        String Query='';
        if (searchParam != null) {
            Query='Select Id, Name,Alcohol__c,brewery_id__c,brewery_Name__c,Id__c,Price__c,Image__c,Remaining_Quantity__c,Tags__c,Total_Quantity__c From Beer__c where Name Like :likeParam LIMIT 50';
        }
        else {
            Query='Select Id, Name,Alcohol__c,brewery_id__c,brewery_Name__c,Id__c,Price__c,Image__c,Remaining_Quantity__c,Tags__c,Total_Quantity__c From Beer__c  LIMIT 50 ';
        }
        
        List<sObject> sObjectList=Database.query(Query);
        return sObjectList;
    }
}
