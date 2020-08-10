import {createElement} from 'lwc';
//createElement is only for Test cases
import Hello from 'c/helloBinding';



describe('c-hello-binding',()=>{

    afterEach(()=>{
        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
    });
    it('onchange input',()=>{
        //create element
        const element=createElement('c-hello-binding',{
            is:Hello
        });
        //adding comp to dom 
        document.body.appendChild(element);
        const EXPECTED='Welcome Message';
        //verify displayed greeting 
        const div=element.shadowRoot.querySelector('div');
        //assert
        expect(div.textContent).not.toBe('Lightning Web Component');

        //trigger new greeting
        const inputEl=element.shadowRoot.querySelector('lightning-input');
        inputEl.value=EXPECTED;
        inputEl.label='Test Input';
        inputEl.name='Test name';
        //html events
        inputEl.dispatchEvent(new CustomEvent('change'));
        //promise fun
        return Promise.resolve().then(()=>{
            expect(div.textContent).toBe(EXPECTED);
        });
    });

})