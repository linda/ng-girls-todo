import { Pipe, PipeTransform } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';
import {filter} from 'rxjs/operators';

@Pipe({
  name: 'completed'
})
export class CompletedPipe implements PipeTransform {

  transform(items: TodoItem[], hide: boolean): any {
    if (!items || !hide) {
      return items;
    }
    return items.filter(item => !item.completed);  }

}
