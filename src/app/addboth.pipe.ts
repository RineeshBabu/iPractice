import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addboth'
})
export class AddbothPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + args;
  }

}
