import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
   <div>
   <button (click)= "increaseDecrease(true)">+</button>
   {{counterValue}}
   <button (click)= "increaseDecrease(false)">-</button>

   </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() counter: number;
  
  counterValue: number;
  constructor() {

   }

  increaseDecrease(val:boolean):void
  {
    if(val)
    {
      this.counterValue++;
    }
    else
    {
if(this.counterValue != 0)
    this.counterValue--;

    }
    this.counterChange.emit(this.counterValue);

  }


  ngOnInit() {
    this.counterValue = this.counter;

    this.counterChange.emit(this.counterValue);

  }

  @Output("counterChange") counterChange:EventEmitter<number> = new EventEmitter();

}
