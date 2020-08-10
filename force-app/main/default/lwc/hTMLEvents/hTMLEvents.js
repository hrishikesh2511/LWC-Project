import { LightningElement } from 'lwc';

export default class HTMLEvents extends LightningElement {
    message='Welcome Hrishikesh';

    handleChange(event)
    {
        const val=event.target.value;
        const lab=event.target.label;

        console.log("Value is ",val +'Label is ',lab);
    }
}