import { LightningElement,wire ,api,track} from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';
export default class Wiremethod extends LightningElement {
    /*
        @wire (getAllCases) cases;
        cases
            -data
            -error

        @wire (getAllCases)
            wiredCase({ data,error})    {
                -data=caseList
                -error=error{An object}
            }
    */

    //@wire(getAllCases) cases;
     @api records;
     @api errors;
     @track subject;

     handleChange(event){
        const sVal=event.target.value;
        this.subject=sVal;
     }

     @wire(getAllCases,{
         subject :'$subject'
     })
            wiredCases({
                data,error
            }){
                if(data){
                    this.records=data;
                    this.errors=undefined;
                }
                if(error){
                    this.errors=error;
                    this.records=undefined;
                }

            }
}