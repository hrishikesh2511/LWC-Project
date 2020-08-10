import { LightningElement ,api} from 'lwc';

export default class LsdCreateRecord extends LightningElement {

    @api objectApiName;

    handleSuccess(){
        alert('Record Created!!');
    }

}