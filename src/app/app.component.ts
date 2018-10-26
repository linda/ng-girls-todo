import { Component } from '@angular/core';
import {TodoItem} from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todoList: TodoItem[] = [
    {title: 'install NodeJS', completed: true},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];


  addItem(itemTitle: string) {
    this.todoList.push({title: itemTitle});
  }
}
