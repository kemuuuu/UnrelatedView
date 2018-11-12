public with sharing class UnrelatedViewController {
    
    @AuraEnabled
    public static List<SObject> tabInit(){
        return [SELECT Id, Name FROM Opportunity];
    }
}
