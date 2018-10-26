import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = '';

  constructor() {
  }
​
  ngOnInit() {
    // setTimeout(() => {
    //   this.title = 'This is not the title you are looking for';
    // }, 3000);

  }

  generateTitle(): string {
    return this.title;
  }
  submitValue(newTitle: string) {
    if(newTitle && newTitle !== '') {
      this.submit.emit(newTitle);
    }
  }
}
