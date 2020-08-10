import { LightningElement,api,track } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationExample extends LightningElement {
    navigateToObjectHome(){
        //Navigate to Case object Home page
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Case',
                actionName:'home'
            }

        });
    }

    navigateToListView(){
        //Navigate to Contact object's recent list view 
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{
                //filtername is a property on the page state  
                filterName: 'Recent'
            }

        });
        
    }

    navigateToNewRecordPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            }

        });
    }

    navigateToRecordViewPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                recordId:'001N000001wMGZSIA4',
                //objectApiName:'namespace__ObjectName',//optional
                actionName:'view'
            }

        });
    }

    navigateToRecordEditPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                recordId:'001N000001wMGZSIA4',
               // objectApiName:'namespace__ObjectName',//optional
                actionName:'edit'
            }

        });  
    }

    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'http://salesforce.com'
            }

        },
        false
        );  
    }


    /*@track
    recordPageUrl;

    connectedCallback(){
        //Generate a URL to a USer record
        this[NavigationMixin.GenerateUrl]({
            type:'standard__recordPage',
            attributes:{
                recordId:"",
               // objectApiName:'namespace__ObjectName',//optional
                actionName:'view',
            },

        }).then(url=>{
            this.recordPageUrl=url;
            console.log('Generated URL', this.recordPageUrl);
        });
    }*/
}