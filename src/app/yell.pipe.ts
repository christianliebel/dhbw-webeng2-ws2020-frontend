import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yell'
})
export class YellPipe implements PipeTransform {

  transform(value: string, suffix: string): string {
    return `${value}${suffix ?? '!!!'}`;
  }

}
