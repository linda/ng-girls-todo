import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../../interfaces/todo-item';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Input() currentTitle: string;
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title: string;

  constructor() {
  }
​
  ngOnInit() {
    if(this.currentTitle) {
      this.title = this.currentTitle;
    } else {
      this.title = '';
    }
  }

  generateTitle(): string {
    return this.title;
  }
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
    this.clear();
  }

  private clear() {
    this.title = null;
  }

}

