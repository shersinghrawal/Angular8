import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, zip } from 'rxjs';
import { userinformation } from 'src/models/userinformation';
import { json } from 'body-parser';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const localUrl = "./assets/userinfo.json";
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) {

  }

  //Get user info from json file and store in local storage
  private getAllUserInfo() {
    this.http.get<userinformation[]>(localUrl)
      .subscribe((data: userinformation[]) => {
        localStorage.setItem("userdata", JSON.stringify(data));
      });
  }

  //Check user info in local storage
  getUserinformationIntoLocalStorage() {
    let data: any = localStorage.getItem("userdata");
    if (data == "" || data == undefined) {
      this.getAllUserInfo();
    }
    else {

    }
  }

  //Get all user information from local storage
  getUserDatafromLocalStorage(): userinformation[] {
    let data: any = localStorage.getItem("userdata");
    return JSON.parse(data);
  }
  //Get user info from local storage by user id
  GetUserinformationById(id: any): userinformation {
    let result: userinformation;
    result = this.getUserDatafromLocalStorage().filter(a => a.id == id)[0];
    return result;
  }
  //update local storage
  updateUserinformationLocalStorage(data: any) {
    localStorage.setItem("userdata", data);
  }


  InsertDataIntoJsonFile(data: any) {
    this.updateUserinformationLocalStorage(JSON.stringify(data));
  }

}
