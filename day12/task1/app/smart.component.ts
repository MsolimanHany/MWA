import { Component, OnInit,Input } from '@angular/core';

import { DumpComponent } from './dump.component';

@Component({
  selector: 'app-smart',
  template: '<app-dump *ngFor="let item of names" [val]="item"> </app-dump>',
  styles: ['']
})
export class SmartComponent implements OnInit {
 
  public names:string[];
  constructor(){
this.names = ['A','B','C']
  }
  ngOnInit() {
  }
  
}
