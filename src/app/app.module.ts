import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdIconModule,
  MdMenuModule,
  MdToolbarModule,
  MdInputModule,
  MdChipsModule,
  MdTabsModule
} from '@angular/material';
import {AppComponent} from './app.component';
import 'hammerjs';
import {TimeLineComponent} from './components/time-line/time-line.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TweetListComponent} from './components/tweet-list/tweet-list.component';
import {TweetCardComponent} from './components/tweet-card/tweet-card.component';
import {HttpModule} from '@angular/http';
import {TweetService} from './services/tweet-service/tweet.service';
import {FormsModule} from '@angular/forms';
import {SignInFormComponent} from './components/sign-in-form/sign-in-form.component';
import {SessionService} from './services/session-service/session.service';
import {SignUpFormComponent} from './components/sign-up-form/sign-up-form.component'
import {MemberService} from './services/member-service/member.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdChipsModule,
    MdTabsModule
  ],
  declarations: [
    AppComponent,
    TimeLineComponent,
    HeaderComponent,
    TweetListComponent,
    TweetCardComponent,
    SignInFormComponent,
    SignUpFormComponent
  ],
  providers: [
    TweetService,
    SessionService,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
