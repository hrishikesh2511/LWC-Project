import { LightningElement, track } from 'lwc';

export default class CalculatorCmp extends LightningElement {

    number1;
    number2;
    @track result;
    handleChange(event){

        const val=event.target.value;
        const name=event.target.name;
        if(name==='number1')
        {
              this.number1=val;  
        }
        else
        {
              this.number2=val;  
        }

    }
    doSum(){

        const sum=parseInt(this.number1)+parseInt(this.number2);
        this.result=sum;

    }
    doSub(){
        const sub=parseInt(this.number1)-parseInt(this.number2);
        this.result=sub;

    }

    
    doMul(){

        const sum=parseInt(this.number1)*parseInt(this.number2);
        this.result=sum;

    }
    doDiv(){
        const sub=parseInt(this.number1)/parseInt(this.number2);
        this.result=sub;

    }

}