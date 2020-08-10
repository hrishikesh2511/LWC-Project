import { LightningElement ,wire} from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/account';
import NAME_FIELD from '@salesforce/schema/account.name';

export default class LdsCreateRecord extends LightningElement {

    accountId;
    name='';

    handleChange(event)
    {
        this.accountId=undefined;
        this.name=event.target.value;
    }

    createAccount(){
        const fields={};
        fields[NAME_FIELD.fieldApiName]=this.name;
        const recordInput={apiName:ACCOUNT_OBJECT.objectApiName,fields};
        createRecord(recordInput)
            .then(account=>{
                this.accountId=account.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                            title:'Success',
                            message:'Account Created',
                            variant:'success',
                        
                    }),
                );
            })
            .catch(error=>{
                this.dispatchEvent(
                    new ShowToastEvent({
                            title:'Error creating record',
                            message:error.body.message,
                            variant:'error',
                        
                    }),
                );

            });

    }

}