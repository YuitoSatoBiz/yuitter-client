import {Component, Input, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Tweet} from '../../classes/tweet';
import {Account} from '../../classes/account';
import {TweetUpdateFormComponent} from '../tweet-update-form/tweet-update-form.component';
import {TweetDeleteConfirmComponent} from '../tweet-delete-confirm/tweet-delete-confirm.component';
import {CookieService} from 'angular2-cookie/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css']
})
export class TweetCardComponent implements OnInit {

  @Input() currentAccountIds: number[];
  @Input() tweet: Tweet;
  account: Account;

  constructor(private dialog: MdDialog, private cookieService: CookieService, private router: Router) {
  }

  ngOnInit() {
  }

  openTweetUpdateForm(): void {
    const dialog = this.dialog.open(TweetUpdateFormComponent, {
      data: this.tweet,
      width: '500px'
    });
    dialog.afterClosed().subscribe(result => {
      if (result != null) {
        this.tweet = result;
      }
    })
  }

  openTweetDeleteConfirm(): void {
    const dialog = this.dialog.open(TweetDeleteConfirmComponent, {
      data: this.tweet,
    });
    dialog.afterClosed().subscribe(result => {
      if (result != null) {
        this.tweet = null;
      }
    })
  }

  toAccountDetail() {
    this.router.navigate(['/account/', this.tweet.accounts[0].accountId]);
  }
}
