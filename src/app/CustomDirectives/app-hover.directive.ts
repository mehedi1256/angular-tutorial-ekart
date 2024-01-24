import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})


export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282b';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') textColor: string = 'white';

  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor= 'white';
    this.textColor = '#28282b';
    this.border = '1px solid #28282b';
  }

  @HostListener('mouseleave') OnMouseLeave() {
    this.backgroundColor = '#28282b';
    this.textColor = 'white';
    this.border = 'none';
  }

}
