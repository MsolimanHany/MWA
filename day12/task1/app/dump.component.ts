import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
   <div>
{{val}}
   </div>
  `,
  styles: []
})
export class DumpComponent implements OnInit {
  @Input() val: string;

  constructor() { }

  ngOnInit() {
  }

}
