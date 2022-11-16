import { UpperCasePipe } from '@angular/common';
import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pmOverEnlaces]'
})
export class OverEnlacesDirective {

  @HostBinding('class.estiloSombras') private ishovering!: boolean;

  @Input('pmOverEnlaces') config = {
    texto: "texto predeterminado",
    color: "hotpink"
  };

  private txtAnterior!: String

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver(){
    this.txtAnterior = this.el.nativeElement.innerHTML;
    this.el.nativeElement.innerHTML = this.config.texto.toUpperCase();
    this.el.nativeElement.className = this.config.color;
    this.ishovering = true;
  }
  
  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.innerHTML = this.txtAnterior.toLowerCase();
    this.el.nativeElement.classList.remove("estiloSombras");
    this.el.nativeElement.classList.remove(this.config.color);
    this.ishovering = false;
  }

}
