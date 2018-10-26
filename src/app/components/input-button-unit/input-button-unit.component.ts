import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title: string = 'Hello World';
​
  constructor() {
    this.title = 'I Love Angular';
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
  changeTitle(event: Event) {
    console.log(event);
  }
}
