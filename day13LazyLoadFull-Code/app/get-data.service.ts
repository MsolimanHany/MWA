import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  getOnlineData(){
    let data = this.http.get("https://randomuser.me/api/?results=10");
    data.subscribe(mydata=>
      {
        window.localStorage.setItem("UserData", JSON.stringify(mydata));

      }
      );
      return data;

  }
  getCashedData(){
let data = JSON.parse(localStorage.getItem("UserData"));
return data;
  }

 

  constructor(private http:HttpClient) { }
}
