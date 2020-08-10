import { LightningElement } from 'lwc';

export default class Grandchild extends LightningElement {

    handeSimpleEvent()
    {
        alert('Grand Child')
    }
}