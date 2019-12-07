import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Socialusers } from '../../models/usermodel';
import { UserInfoService } from 'src/Services/user-info.service';
import { userinformation } from '../../models/userinformation';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable()
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  id: any;
  socialusers = new Socialusers();
  userforminfo: any;// userinfo;
  dynamicDrp = [{ value: "0", Text: "Select" }];
  htmlelements = [];
  isEmail: any;
  attr1: any;
  attr2: any;
  attr3: any;
  attr4: any;
  constructor(private route: Router,
    private activateroute: ActivatedRoute,
    private userdata: UserInfoService) {
    this.userforminfo = new userinformation()
  }

  ngOnInit() {
    // try {

    // } catch(err) {

    // }
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
    if (this.socialusers == null) {
      this.route.navigate(["/login"]);
    }

    this.dynamicDrp.push(
      { value: "email", Text: "Email" },
      { value: "text", Text: "Phone No" },
      { value: "checkbox", Text: "IsValid User" },
      { value: "numeric", Text: "Age" },
      { value: "radio", Text: "Gender" }
    );

    this.id = this.activateroute.snapshot.queryParamMap.get('id') || 0;
    if (this.id > 0) {
      this.userforminfo = this.userdata.GetUserinformationById(this.id);
      // this.userdata.getUserInfoById(this.id)
      //  .then((data: userinformation[]) => {
      // this.userforminfo = data.filter(a => a.id == this.id)[0];
      if (this.userforminfo.email != '') {
        this.formControl('email');
      }
      if (this.userforminfo.attr1 != '') {
        this.formControl('text');
      }
      if (this.userforminfo.attr2 != '') {
        this.formControl('numeric');
      }
      if (this.userforminfo.attr3 != '') {
        this.formControl('checkbox');
      }
      if (this.userforminfo.attr4 != '') {
        this.formControl('radio');
      }

      // });
    }
  }

  onChange(deviceValue) {
    this.formControl(deviceValue.value);

  }


  private formControl(deviceValue: any) {
    if (deviceValue != "0") {
      if (deviceValue == 'email') {
        this.isEmail = deviceValue;
      }
      if (deviceValue == 'text') {
        this.attr1 = deviceValue;
      }
      if (deviceValue == 'numeric') {
        this.attr2 = deviceValue;
      }
      if (deviceValue == 'checkbox') {
        this.attr3 = deviceValue;
      }
      if (deviceValue == 'radio') {
        this.attr4 = deviceValue;
      }
    }
  }

  onClickSubmit(form: any): void {
    let data = this.userdata.getUserDatafromLocalStorage()
    //this.userdata.getUserInfo().then((data: userinformation[]) => {
    if (this.userforminfo.id == 0) {
      this.userforminfo.id = Math.floor(Math.random() * 13579);
      this.modifiedUserData(data);
    }
    else {
      let index: any = data.findIndex(o => o.id == this.userforminfo.id);
      data.splice(index, 1);
      this.modifiedUserData(data);
    }
    //}).catch((err: any) => { });


  }


  private modifiedUserData(data: userinformation[]) {
    let obj: any = JSON.parse(JSON.stringify(this.userforminfo));
    data.push(obj);
    this.userdata.InsertDataIntoJsonFile(data);
    this.route.navigate(["/userlist"]);

  }
}
