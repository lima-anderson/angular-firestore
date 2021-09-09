import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converteTelefone'
})
export class ConverteTelefonePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 8){
      return `${value.substr(0, 4)}-${value.substr(4, 8)}`;
    }
    if (value.length === 10){
      return `(${value.substr(0, 2)}) ${value.substr(2, 4)}-${value.substr(6, 10)}`;
    }
    if (value.length === 11){
      return `(${value.substr(0, 3)}) ${value.substr(3, 4)}-${value.substr(7, 11)}`
    }
    return value;

  }

}
