import { UpperCasePipe } from '@angular/common';
import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pmOverEnlaces]'
})
export class OverEnlacesDirective {

  @HostBinding('class.upperCaseVerde') private ishovering!: boolean;

  @Input('pmOverEnlaces') config = {
    texto: "texto predeterminado",
    color: "hotpink"
  };

  cadena: String = "";

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.toUpperCase();
    this.ishovering = true;
    console.log(this.config.texto);
    console.log(this.config.color);
  }
  
  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.toLowerCase();
    this.ishovering = false;
  }

}
