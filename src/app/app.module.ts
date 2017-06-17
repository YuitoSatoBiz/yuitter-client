import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdMenuModule, MdToolbarModule} from '@angular/material';
import {AppComponent} from './app.component';
import 'hammerjs';
import {TimeLineComponent} from './time-line/time-line.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    AppRoutingModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  declarations: [
    AppComponent,
    TimeLineComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
