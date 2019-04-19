import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { AppComponent } from './app.component';
import { GetDataService } from './get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found.component';
const MY_ROUTES:Routes= [
  
   {path:'users', loadChildren:"./users/users.module#UsersModule"},
   {path: '**', component: PageNotFoundComponent}
   
];
@NgModule({
  declarations: [
    AppComponent,PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(MY_ROUTES,{preloadingStrategy: PreloadAllModules})
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule{}