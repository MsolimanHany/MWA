import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetDataService } from './get-data.service';


@Injectable()
export class MyGuard implements CanActivate  {
  constructor(private dataService:GetDataService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean > {
       let uuid = route.paramMap.get("uuid");
       if(uuid)
       {
        return new Promise((resolve,reject)=>{
       
          let data = this.dataService.getCashedData();
            let found =  data.results.filter(user=> user.login.uuid===uuid);
             if(found.length>0){
               console.log("returned data!")
               resolve(true);
             } else {
               this.router.navigate(['/error']);
               resolve(false);
             }
             
          
        })
 
          
       }
       return true;
  }
  
}
