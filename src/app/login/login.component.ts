import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router, ActivatedRoute, Params } from '@angular/router';  
import{Socialusers} from '../../models/usermodel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  socialusers=new Socialusers();  

  constructor(private authService: AuthService,
    private router: Router  ) {
      
           }
signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(socialusers => { 
      localStorage.setItem('socialusers', JSON.stringify(socialusers));  
      //this.router.navigate(["/userlist"]);
      window.location.href="/userlist";
    });
  }
 
  signInWithFB(): void {
   // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit() {
   
  }
}
