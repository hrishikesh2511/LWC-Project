import {createElement} from 'lwc';
//createElement is only for Test cases
import Hello from 'c/helloWorld';

//clean up function - aftereach ,afterall,beforeall
//test class name as compared with apex
describe('c-hello',()=>{
        it('displays greeting',()=>{
            //create element
            const element=createElement('c-hello',{
                is:Hello
            });
            //adding comp to dom 
            document.body.appendChild(element);
            //verify displayed greeting 
            const div=element.shadowRoot.querySelector('p');
            //assert
            expect(div.textContent).toBe('Lightning Web Component');
        });

})