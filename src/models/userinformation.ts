import { userinfo } from './IUserinfo';

export class userinformation implements userinfo {
    id;
    name;
    enrollmentnumber;
    college;
    university;
    email;
    attr1;
    attr2;
    attr3;
    attr4;
    constructor(
       
    ) { 

        this.id=0;
        this.name='';
        this.enrollmentnumber='';
        this.college='';
        this.university='';
        this.email='';
        this.attr1='';
        this.attr2='';
        this.attr3=false;
        this.attr4='';
    }
}