import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(heros: any, searchTerm: string): any {
    if (!heros || !searchTerm) {
      return heros;
    } else {
      return heros.filter(hero => hero.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
  }

}
