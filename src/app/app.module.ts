import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './components/input-button-unit/input-button-unit.component';


@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
