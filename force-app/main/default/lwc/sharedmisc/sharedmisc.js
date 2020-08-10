import { LightningElement ,track} from 'lwc';
import {si} from 'c/utility';

export default class Sharedmisc extends LightningElement {

    @track p;
    @track t;
    @track r;
    constructor(){
        super();
        const s=si(100,1,10);
        console.log('Simple Intereset is',s);
    }

    calculateSI(){
        const s=si(this.p,this.t,this.r);
        console.log('Simple Interest is',s);
    }
}