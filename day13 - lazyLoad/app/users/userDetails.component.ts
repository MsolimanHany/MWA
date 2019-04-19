import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userDetails',
  template:`
  <ul>
  <p>This is Your Selected User </p>
  </ul>
  <p>
  {{user|json}}
  </p>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {
  user:any;
  constructor(private dataService:GetDataService, private route:ActivatedRoute) {
    
   }

  ngOnInit() {
    var data = this.dataService.getCashedData();

    this.route.params.subscribe(param=>{
      console.log(param);
      console.log(data.results);

var elem =  data.results.filter(user=> user.login.uuid===param.uuid);
this.user = elem[0];
console.log(this.user);

    });
   }

}
