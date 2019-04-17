import { Component, OnInit  } from '@angular/core';
import {SmartComponent} from './smart.component'

@Component({
  selector: 'app-root',
  template: '<app-smart> </app-smart>',
  styles: ['']
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }
  title = 'my-dream-app';
  
}
