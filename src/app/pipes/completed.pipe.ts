import { Pipe, PipeTransform } from '@angular/core';
import {TodoItem} from '../interfaces/todo-item';

@Pipe({
  name: 'completed',
  pure: false

})
export class CompletedPipe implements PipeTransform {

  transform(items: TodoItem[], hide: boolean): any {
    if (!items || !hide) {
      return items;
    }
    return items.filter(item => !item.completed);  }

}
