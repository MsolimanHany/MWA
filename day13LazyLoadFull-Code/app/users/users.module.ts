import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './userDetails.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found.component';
import { MyGuard } from '../my-guard.guard';

const MY_ROUTES:Routes = [
  {path:'', component:UserComponent},
  {path:':uuid',component:UserDetailsComponent,canActivate:[MyGuard]}

]
@NgModule({
  declarations: [UserComponent,UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MY_ROUTES)
  ]
  , providers:[MyGuard]
  , bootstrap: [UserComponent]
})
export class UsersModule { }
