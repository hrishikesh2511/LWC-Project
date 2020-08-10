import { LightningElement ,api,track} from 'lwc';

export default class ChildComp extends LightningElement {
    @api message;
    @api pageno;
    @api contact;
    @track date=new Date();

    
    @api childMethod(messageFromParent,page_no){
        this.date=new Date();
        this.message=messageFromParent;
        this.pageno=page_no;
    }
    handleEvent(){
        /*
            Step 1-Create Event
        */
       const eventS=new CustomEvent(
           'simple',
            {
                   // detail :{message :this.message,pageno:this.pageno,staticVal:"Hrishikesh Kulkarni"}
                   bubbles:true,
                   composed:false
            }
           
           );
       /*
            Step 2- Dispatch 
       */ 
      this.dispatchEvent(eventS);
    }

}