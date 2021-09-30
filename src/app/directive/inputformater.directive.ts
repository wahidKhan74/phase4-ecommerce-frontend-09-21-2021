import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputformater]'
})
export class InputformaterDirective {

  constructor(private elem:ElementRef ) { }

  @HostListener('blur')
  onBlur(){
    console.log("Trigger");
    
    let value:string = this.elem.nativeElement.value;
    this.elem.nativeElement.value = value.toLowerCase();
  }

}
