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
  MdTabsModule,
  MdSelectModule
} from '@angular/material';
import {AppComponent} from './app.component';
import 'hammerjs';
import {TimeLineComponent} from './components/time-line/time-line.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TweetListComponent} from './components/tweet-list/tweet-list.component';
import {TweetCardComponent} from './components/tweet-card/tweet-card.component';
import {TweetService} from './services/tweet-service/tweet.service';
import {FormsModule} from '@angular/forms';
import {SignInFormComponent} from './components/sign-in-form/sign-in-form.component';
import {SessionService} from './services/session-service/session.service';
import {SignUpFormComponent} from './components/sign-up-form/sign-up-form.component'
import {MemberService} from './services/member-service/member.service';
import {CookieService, CookieOptions} from 'angular2-cookie/core';
import {MdDialogModule} from '@angular/material';
import {TweetUpdateFormComponent} from './components/tweet-update-form/tweet-update-form.component';
import {TweetDeleteConfirmComponent} from './components/tweet-delete-confirm/tweet-delete-confirm.component';
import {AccountDetailComponent} from './components/account-detail/account-detail.component';
import {AccountService} from './services/account-service/account.service';
import {MemberDetailComponent} from './components/member-detail/member-detail.component';
import {AccountTweetListComponent} from './components/account-tweet-list/account-tweet-list.component';
import {AccountFormComponent} from './components/account-form/account-form.component';
import {AccountFollowingService} from './services/account-following-service/account-following.service';
import {AccountSearchComponent} from './components/account-search/account-search.component';
import {AccountCardComponent} from './components/account-card/account-card.component';
import {ImageUploadModule} from 'angular2-image-upload';
import {CookieXSRFStrategy, HttpModule, XSRFStrategy} from '@angular/http';
import {DataStoreService} from './services/data-store-service/data-store.service';


export function cookieStrategy() {
  return new CookieXSRFStrategy('csrfToken', 'X-CSRFToken');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ImageUploadModule.forRoot(),
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
    MdTabsModule,
    MdSelectModule,
    MdDialogModule
  ],
  declarations: [
    AppComponent,
    TimeLineComponent,
    HeaderComponent,
    TweetListComponent,
    TweetCardComponent,
    SignInFormComponent,
    SignUpFormComponent,
    TweetUpdateFormComponent,
    TweetDeleteConfirmComponent,
    AccountDetailComponent,
    MemberDetailComponent,
    AccountTweetListComponent,
    AccountFormComponent,
    AccountSearchComponent,
    AccountCardComponent
  ],
  providers: [
    TweetService,
    SessionService,
    MemberService,
    AccountService,
    HttpModule,
    { provide: XSRFStrategy, useFactory: cookieStrategy},
    { provide: CookieOptions, useValue: {} },
    AccountFollowingService,
    CookieService,
    DataStoreService
  ],
  entryComponents: [
    TweetUpdateFormComponent,
    TweetDeleteConfirmComponent,
    AccountFormComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
