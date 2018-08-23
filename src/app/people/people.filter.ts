import {Pipe, PipeTransform} from '@angular/core';
import { IPeople } from './people.model';
@Pipe({
  name: 'filterData'
})

export class PeopleFilter implements PipeTransform {
  transform(value: IPeople[], filterBy: string) {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    return filterBy ? value.filter((item: IPeople) =>
    item.name.toLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
