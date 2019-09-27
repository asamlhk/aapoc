import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMdigit]'
})
export class BinputDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup') onMouseEnter() {
 
    this.el.nativeElement.value = this.update(this.el.nativeElement.value);
  }

  private update(value) {
    let final = '';
    const nums = '-០១២៣៤៥៦៧៨៩';

    for (var i = 0; i <= value.length; i++) {
      let char = value.charAt(i - 1);
      let n = nums.indexOf(char);
      n > 0 ?
        final += n - 1
        : final += char;
    }
    return final;
  }
}
