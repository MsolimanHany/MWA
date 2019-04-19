import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-user',
  template:`  
 
  <div class='row' *ngFor='let user of users'>
  <a [routerLink]="[user.login.uuid]">{{user.login.uuid}}</a>
  </div>
<router-outlet></router-outlet>`,
  styles: []
})
export class UserComponent implements OnInit {

  users:Array<any>;
  constructor(private dataService:GetDataService) { }

  ngOnInit() {
    let data =this.dataService.getCashedData()

    this.users = data.results;

  }

}
