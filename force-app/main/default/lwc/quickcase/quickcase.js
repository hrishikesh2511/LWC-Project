import { LightningElement } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';


export default class Quickcase extends LightningElement {

    subject;
    description;
    statusValue;
    priorityValue;
    originValue;

    handleChange(event){
        let name=event.target.name;
        let value=event.target.value;
        if(name==="subject")
        {
            this.subject=value;
        }
        else if(name==="description")
        {
            this.description=value;
        }

    }

    get status(){
        return [
            { label:'New' ,value:'new'},
            {label:'Closed',value:'closed'}

        ];
    }

    get origin(){
        return [
            { label:'Web' ,value:'web'},
            {label:'Phone',value:'phone'},
            {label:'Email',value:'email'}

        ];
    }

    get priority(){
        return [
            { label:'Low' ,value:'low'},
            {label:'Medium',value:'medium'},
            {label:'High',value:'high'}

        ];
    }

    handleCreate(){

    }
}