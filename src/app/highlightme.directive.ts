import { Directive, ElementRef, HostListener, Input } from '@angular/core';



@Directive({
  selector: '[appHighlightme]'
})



export class HighlightmeDirective {

  @Input() appHighlightme: string;
  @Input() mycolor: string;

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.appHighlightme;
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHighlightme) {
      this.higligtmewith(this.appHighlightme);
    } else {
      this.higligtmewith(this.mycolor);
    }

  }

  @HostListener('onmouseleave') onMouseLeave() {
    this.higligtmewith('red');
  }

  higligtmewith(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
