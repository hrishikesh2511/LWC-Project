import { LightningElement,api } from 'lwc';

export default class RecordObject extends LightningElement {
    @api recordId;
    @api objectApiName;//account ,opp, con

    constructor()
    {
        super();
        console.log('Record Id',this.recordId);
        console.log('Object Name',this.objectApiName);
    }
}