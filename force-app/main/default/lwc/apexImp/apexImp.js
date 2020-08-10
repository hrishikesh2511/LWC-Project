import { LightningElement ,track} from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';

export default class ApexImp extends LightningElement {

    @track subject;
    @track records;
    @track error;

    handleChange(event){
        const sVal=event.target.value;
        this.subject=sVal;
       
    }

    handleLoad(){
        getAllCases({
            subject:this.subject
        })
        .then(result=>{
            console.log('Case Records',result)
            this.records=result;
        })
        .catch(error=>{
            console.log('Error',error)
            this.error=error
        })

    }
}