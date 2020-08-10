import { LightningElement ,api,track } from 'lwc';
import findRecords from '@salesforce/apex/lookupController.findRecords';
export default class CustomLookup extends LightningElement {


    @api objectApiName;
    @api fieldApiName;
    @api iconname;
    @track records;
    @track errors;
    @track selectedRecord;

    handleSearch(event){
        const searchValue=event.detail;

        findRecords({
                objectName:this.objectApiName,
                fieldApiName:this.fieldApiName,
                searchValue:searchValue

        })
        .then(result=>{
            console.log('Records Are',result);
            this.records=result;
            for(let i=0;i<this.records.length;i++){
                if(this.records[i]){
                    this.records[i].Name=this.records[i][this.fieldApiName];
                    console.log(this.records[i].Name);
                }
            }
            this.errors=undefined;

        })
        .catch(error=>{

            this.errors=error;
            this.records=undefined;
            console.log('Error',error);
        });


    }

    handleSelect(event){
        const recordId=event.detail;
        const selectedRec=this.records.find(
            record=>record.Id===recordId
        );
        console.log('Selected record',selectedRec)
        this.selectedRecord=selectedRec;    
    }

    /*
        this.records.find(contact=>contact.id===contactId)

        for(contact con:records){
            if(con.id==contactId)
            {
                return con
            }
            else{
                null;
            }
        }
    */

    handleRemove(){
        this.selectedRecord=undefined;
        this.records=undefined;
        this.errors=undefined;
    }
}