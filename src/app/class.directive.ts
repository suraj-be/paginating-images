import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {}

  @Input() set setBgColor(newColor: string) {
    this.element.nativeElement.style.backgroundColor = newColor;
  }
}
