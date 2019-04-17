import { Component, OnInit } from '@angular/core';
import {CounterComponent} from './counter.component';

@Component({
  selector: 'app-root',
  template: '<app-counter [counter]= "ComponentCounterValue" (counterChange)="counterChange($event)"> </app-counter>  <p>The value in parent:{{ComponentCounterValue}}</p>',
  styles: ['']
})
export class AppComponent implements OnInit {
  ngOnInit() {
this.ComponentCounterValue = 20;
  }
  ComponentCounterValue:number;
  title = 'my-dream-app';
  counterChange(e){
    
    this.ComponentCounterValue = e;
  }
}
