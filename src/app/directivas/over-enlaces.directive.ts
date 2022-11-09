import { UpperCasePipe } from '@angular/common';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pmOverEnlaces]'
})
export class OverEnlacesDirective {

  cadena: String = "";

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.cadena = this.el.nativeElement.innerHTML
    this.el.nativeElement.innerHTML = this.cadena.toUpperCase();
  }

  @HostListener('mouseout') onMouseOut() {
    this.cadena = this.el.nativeElement.innerHTML
    this.el.nativeElement.innerHTML = this.cadena.toLowerCase();
  }

}
