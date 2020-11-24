import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @HostBinding('style.color') color = "black";

  constructor() { }

  @HostListener('window:keyup', ['$event']) windowClick($event) {
    switch ($event.keyCode) {
      case 38:
        this.color = 'grey';
        break;
      case 39:
        this.color = 'blue';
        break;
      case 40:
        this.color = 'green';
        break;
      case 37:
        this.color = 'purple';
        break;
      default:
        break;
    }
  }
}
