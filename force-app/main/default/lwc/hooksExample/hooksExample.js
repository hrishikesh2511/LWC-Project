import { LightningElement } from 'lwc';

export default class HooksExample extends LightningElement {

    name='Hrishikesh';
    constructor(){
        super();
        console.log('Inside Constructor');
        this.name=this.name+'Kulkarni';
    }
    connectedCallback(){
        console.log('Inside connectedCallback');
    }
    renderedCallback(){
        console.log('Inside renderedCallback');
    }
    /*
    render(){
        console.log('Inside Constructor');
    }*/
    errorCallback(error,stack){
        console.error(error);
    }
}