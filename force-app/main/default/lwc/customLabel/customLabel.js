import { LightningElement ,track} from 'lwc';
import salesforceLogoDescription from '@salesforce/label/c.salesforceLogoDescription';
import salesforceLogo from '@salesforce/resourceUrl/salesforceLogo';
import moment from '@salesforce/resourceUrl/moment';
import css from '@salesforce/resourceUrl/css';
import {loadStyle,loadScript} from 'lightning/platformResourceLoader';

export default class CustomLabel extends LightningElement {

    @track LOGO_DESC=salesforceLogoDescription;
    @track logo =salesforceLogo;

    connectedCallback()
    {
        Promise.all(
            loadScript(this,moment),
            loadStyle(this,css)
        )

        .then(()=>{

        })
        .catch(error=>{
            console.log('Error',error);
        });
    }
}