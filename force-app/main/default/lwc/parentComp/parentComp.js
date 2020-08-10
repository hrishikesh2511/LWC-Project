import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    handleSimpleEvents(event){
        /*const message=event.detail.message;
        const pageno=event.detail.pageno;
        const name=event.detail.staticVal;
        console.log('Message is:',message);
        console.log('Page No is:',pageno);
        console.log('Name is:',name);*/
        console.log('Message is:',event.target.message);
        console.log('Page No is:',event.target.pageno);
    }

    handleClick(){
        //to call child js method from parent js 
        this.template.querySelector('c-child-comp').childMethod('After Api Function',120);
    }
    /*

        aura:method 
        <c:compname aura:id="childCmp"/>
        component.find('childCmp').methodName()
    */

}