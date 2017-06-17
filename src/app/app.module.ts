import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
