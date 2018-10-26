import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './components/input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { ListManagerComponent } from './components/list-manager/list-manager.component';
import {TodoListService} from './services/todo-list.service';
import {StorageService} from './services/storage.service';
import {FormsModule} from '@angular/forms';
import { CompletedPipe } from './pipes/completed.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    CompletedPipe
  ],
  imports: [
    BrowserModule, FormsModule

  ],
  providers: [TodoListService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
