import { Directive, ElementRef, OnInit, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackground implements OnInit {
    // private element: ElementRef;
    // private renderer: Renderer2;
    @Input() backgroundColor: string = "#36454f";
    @Input() textColor: string = "white";

    constructor(private element: ElementRef, private renderer: Renderer2) {
        // this.element = element;
        // this.renderer = renderer;
    }

    ngOnInit() {
        // this.element.nativeElement.style.backgroundColor = '#36464f';
        // this.element.nativeElement.style.color = 'white';

        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.backgroundColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor);
        // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is an example title');
    }
}