import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{UserlistComponent} from './userlist/userlist.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent } ,
   {path:"userlist",component:UserlistComponent},
   {path:"userinfo",component:UserinfoComponent,}
]
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule
    ,FormsModule],
  exports: [RouterModule],
  declarations: [
    LoginComponent,UserlistComponent
  ]
})
export class AppRoutingModule { }
//Client secret for google
// /BIVVbHxu8l5xDorp4XlqbYmNmmm