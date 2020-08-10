import { LightningElement } from 'lwc';

export default class PropertyDemo extends LightningElement {
    message = 'Non-Reactive Property';

    get name(){
        return 'Hrishikesh';
    }

    get changedMessage()
    {
        return this.message+'Added Value using get prop';
    }
    handleChange(event){
        this.message = event.target.value;
        console.log(' Updated Message is ', this.message);
    }
}