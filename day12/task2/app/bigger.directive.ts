import { Directive, ElementRef, Renderer2, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class BiggerDirective implements OnInit{
  ngOnInit(): void {
    this.render2.setStyle(this.element.nativeElement, "user-select", "none");
  }
  constructor(private element:ElementRef, private render2:Renderer2) { }
  @HostBinding("style.fontSize") fsize;
  @HostListener("dblclick") dblClick(){
    
    let sSize = window.getComputedStyle(this.element.nativeElement,null).getPropertyValue('font-size');
    let fontSize = parseFloat(sSize)+2; 
   this.fsize = fontSize+"px"
  }

}