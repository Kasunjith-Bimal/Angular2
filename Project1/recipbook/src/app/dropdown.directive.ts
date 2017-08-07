import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.open') get opened(){

    return this.IsOpen;
  }


@HostListener('click') open(){
  this.IsOpen =true;
}

@HostListener('mouseleave') close(){
  this.IsOpen=false;
}

private IsOpen =false;
}
