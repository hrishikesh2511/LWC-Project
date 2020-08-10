import { LightningElement,wire,track } from 'lwc';
import {getObjectInfo,getPicklistValues} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/account';
import INDUSTRY_FIELD from '@salesforce/schema/account.Industry';
export default class ObjectInfoApi extends LightningElement {

    @track pickVal;
    @wire (getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
        wiredMethod({data,error}){
            if(data){
                console.log('Object Information',data);
            }
            if(error){
                console.log('Error',error);

            }
        }


    @wire(getPicklistValues,{recordTypeId:'012000000000000AAA',fieldApiName:INDUSTRY_FIELD})
            wiredField({data,error}){
                console.log('Data',data);
                if(data){
                    this.pickVal=data.values;
                }
            }    
            if(error){
                console.log('Error',error);

            }
}