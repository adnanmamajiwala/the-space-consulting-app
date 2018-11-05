import {Directive, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {

  @Input() scrollTo: string;

  constructor(private renderer: Renderer2) {
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    const selectRootElement: Element = this.renderer.selectRootElement(this.scrollTo, true);
    selectRootElement.scrollIntoView({behavior: 'smooth', block: 'center'});
  }
}
