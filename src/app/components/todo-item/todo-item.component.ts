import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  editMode = false;

  constructor() { }

  ngOnInit() {
  }
  removeItem() {
    this.remove.emit(this.item);
  }

  updateItem(newValue: string) {
    if(newValue === '') {
      this.removeItem();
    } else {
      this.update.emit({
        item: this.item,
        changes: {title: newValue}
      });
    }
    this.editMode = false;
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  toggleEditMode(){
    this.editMode = !this.editMode;
  }
}
