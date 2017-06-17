import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdMenuModule, MdToolbarModule} from '@angular/material';
import {AppComponent} from './app.component';
import 'hammerjs';
import {TimeLineComponent} from './components/time-line/time-line.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TweetListComponent} from './components/tweet-list/tweet-list.component';
import {TweetCardComponent} from './components/tweet-card/tweet-card.component';
import { HttpModule } from '@angular/http';
import {TweetService} from './services/tweet-service/tweet.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
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
    HeaderComponent,
    TweetListComponent,
    TweetCardComponent
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
