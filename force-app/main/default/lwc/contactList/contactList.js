import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {
    contacts=[
        {
            Id:1,
            Name:'Hrishikeh Kulkarni',
            Email:'hrishikesh@abc.com',
            Phone:'123'

        },
        {
            Id:2,
            Name:'Hanumanth Kulkarni',
            Email:'hrk@abc.com',
            Phone:'456'

        },
        {
            Id:3,
            Name:'Hhk',
            Email:'hhk@abc.com',
            Phone:'789'

        }

    ];
}