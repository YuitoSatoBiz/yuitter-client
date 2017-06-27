import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {AccountService} from '../../services/account-service/account.service';
import {Account} from '../../classes/account';
import {Tweet} from '../../classes/tweet';
import {TweetService} from '../../services/tweet-service/tweet.service';
import {CookieService} from 'angular2-cookie/core';
import {AccountFollowingService} from '../../services/account-following-service/account-following.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  account: Account;
  tweets: Tweet[];
  followers: Account[];
  followees: Account[];
  // currentAccountId: number;
  error: String;
  followFlg: boolean;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private location: Location,
              private tweetServie: TweetService,
              private accountFollowingService: AccountFollowingService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.setAccount();
    this.setTweets();
    this.setFollowers();
    this.setFollowees();
    this.followFlg = false;
  }

  follow(): void {
    this.accountFollowingService.create(this.account.accountId)
      .then(() => this.followFlg = true);
  }

  unfollow(): void {
    this.accountFollowingService.delete(this.account.accountId)
      .then(() => this.followFlg = false);
  }

  private handleError(error: any): Promise<any> {
    this.error = JSON.parse(error._body)['error'];
    return Promise.reject(error.message || error);
  }

  private setAccount(): void {
    this.route.params
      .switchMap((params: Params) => this.accountService.find(+params['accountId']))
      .subscribe(account => this.account = account);
  }

  private setTweets(): void {
    this.route.params
      .switchMap((params: Params) => this.tweetServie.searchByAccountId(+params['accountId']))
      .subscribe(tweets => this.tweets = tweets);
  }

  private setFollowers(): void {
    this.route.params
      .switchMap((params: Params) => this.accountService.listFollowers(+params['accountId']))
      .subscribe(followers => this.followers = followers);
  }

  private setFollowees(): void {
    this.route.params
      .switchMap((params: Params) => this.accountService.listFollowees(+params['accountId']))
      .subscribe(followees => this.followees = followees);
  }

  private setFollowFlg(): void {
    this.accountFollowingService.find(this.account.accountId)
      .then(followFlg => this.followFlg = followFlg)
  }
}
