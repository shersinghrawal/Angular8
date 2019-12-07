import { Component, OnInit } from '@angular/core';
import { Socialusers } from '../../models/usermodel';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent
  implements OnInit {
  socialusers = new Socialusers();
  constructor(private router: Router ) {
 
  }

  isEmptyObject(obj) {
    if(obj==null){
      return true;
    }
    return (obj && (Object.keys(obj).length === 0));
  }
  navigation(url){
    this.router.navigate(["/"+url]);
  }
  userSignout() {
    localStorage.removeItem("socialusers");
    window.location.href="";
  }
  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
  }

}
