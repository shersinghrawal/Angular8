import { Component, OnInit, Injectable } from '@angular/core';
import { Socialusers } from '../../models/usermodel';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserInfoService } from 'src/Services/user-info.service';
import { userinfo } from 'src/models/IUserinfo';
import { Observable } from 'rxjs';
import { userinformation } from 'src/models/userinformation';

const localUrl = "../../models/userinfo.json";
@Injectable({
  providedIn: "root"

})
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  socialusers = new Socialusers();
  userdatas;
  constructor(private route: Router,
    private userdata: UserInfoService) {
    this.userdata.getUserinformationIntoLocalStorage();
  }
  edit(userData: Observable<userinfo[]>,
    user: userinfo, index) {

    //    userData.forEach((obj) => {
    //     obj.forEach(a=>{
    //       debugger;
    //       obj.splice(1,1);


    //     })

    // })

    this.route.navigate(["/userinfo"], { queryParams: { id: user.id } });

  }
  del(userData: Observable<userinfo[]>, user: userinfo, index) {

    if (confirm("Are you sure you want to delete '" + user.name + "' profile?")) {

      let data = this.userdata.getUserDatafromLocalStorage();
      // this.userdata.getUserInfo().then((data: userinformation[]) => {
      let index: any = data.findIndex(o => o.id == user.id);
      data.splice(index, 1);
      this.modifiedUserData(data);
      //}).catch((err: any) => { });
    }
  }
  private modifiedUserData(data: userinformation[]) {
    let varthis: any = this;
    this.userdata.InsertDataIntoJsonFile(data);
    this.userdatas = this.userdata.getUserDatafromLocalStorage();
  }
  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
    if (this.socialusers == null) {
      this.route.navigate(["/login"]);
    }
    this.userdatas = this.userdata.getUserDatafromLocalStorage();
  }

  addnewrecord() {
    this.route.navigate(["/userinfo"]);
  }



}
