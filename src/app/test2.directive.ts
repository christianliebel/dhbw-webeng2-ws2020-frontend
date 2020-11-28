import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTest2]'
})
export class Test2Directive {

  @Input()
  public todo;

  @HostBinding('click')
  public onClick(): void {
    console.log('Item was clicked!');
  }

}
