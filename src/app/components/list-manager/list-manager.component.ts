import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../../interfaces/todo-item';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];
  constructor(private todoListService: TodoListService) {}
  hideCompleted: boolean;

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(itemTitle: string) {
    if (itemTitle && itemTitle !== '') {
      this.todoListService.addItem({ title: itemTitle });
    }
  }
  removeItem(item) {
    this.todoListService.deleteItem(item);
  }
  updateItem(item) {
    if (item.changes.title === '') {
      this.removeItem(item);
    } else {
      this.todoListService.updateItem(item.item, item.changes);
    }
  }

  toggleHideCompleted() {
    this.hideCompleted = !this.hideCompleted;
  }

}
