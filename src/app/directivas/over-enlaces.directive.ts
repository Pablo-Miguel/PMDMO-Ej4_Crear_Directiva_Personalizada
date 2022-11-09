import { UpperCasePipe } from '@angular/common';
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[pmOverEnlaces]'
})
export class OverEnlacesDirective {

  @HostBinding('class.upperCaseVerde') private ishovering!: boolean;

  cadena: String = "";

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    if(this.el.nativeElement.tagName === 'A'){
      this.ishovering = true;
    }
  }
  
  @HostListener('mouseout') onMouseOut() {
    this.ishovering = false;
  }

}
