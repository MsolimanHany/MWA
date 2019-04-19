import { Component, OnInit  } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  template: `
  <div >
    <div>
      <ul>
      <li><a [routerLink]="['users']">Users</a></li>
      </ul>
    </div>
    <router-outlet></router-outlet>
  </div>
`,
  styles: ['']
})
export class AppComponent implements OnInit {
  mydata:any;
  singledata:string;
  another:any[];

constructor(private dataReturn:GetDataService){}
  ngOnInit() {
   this.dataReturn.getOnlineData();
/*this.mydata = this.dataReturn.getCashedData();
console.log(this.mydata.results)
this.another = this.mydata.results
console.log(this.another[4])


this.singledata = JSON.stringify(this.another[3].login.uuid);*/

  }
  title = 'my-dream-app';
  
}


