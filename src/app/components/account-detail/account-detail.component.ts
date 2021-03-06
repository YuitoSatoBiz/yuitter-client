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
import {MemberService} from '../../services/member-service/member.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  accountIds: number[];
  account: Account;
  currentAccount: Account;
  tweets: Tweet[];
  followersCount: number;
  followeesCount: number;
  error: String;
  followFlg: boolean;

  constructor(private route: ActivatedRoute,
              private accountService: AccountService,
              private memberService: MemberService,
              private tweetServie: TweetService,
              private accountFollowingService: AccountFollowingService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.followersCount = 0;
    this.followeesCount = 0;
    this.setAccountIds();
    this.setAccount();
    this.setCurrentAccount();
    this.setTweets();
    this.setFollowers();
    this.setFollowees();
    this.setFollowFlg();
  }

  follow(): void {
    this.accountFollowingService.create(this.account.accountId)
      .then(() => {
        this.followFlg = true;
        this.followersCount++;
      });
  }

  unfollow(): void {
    this.accountFollowingService.remove(this.account.accountId)
      .then(() => {
        this.followFlg = false;
        this.followersCount--;
      });
  }

  private handleError(error: any): Promise<any> {
    this.error = JSON.parse(error._body)['error'];
    return Promise.reject(error.message || error);
  }

  private setAccountIds(): void {
    this.memberService.findCurrent()
      .then(member => {
        this.accountIds = member.accounts.map(a => a.accountId);
      });
  }

  private setAccount(): void {
    this.route.params
      .switchMap((params: Params) => this.accountService.find(+params['accountId']))
      .subscribe(account => this.account = account);
  }

  private setCurrentAccount(): void {
    this.accountService.find(+this.cookieService.get('accountId'))
      .then(account => this.currentAccount = account);
  }

  private setTweets(): void {
    this.route.params
      .switchMap((params: Params) => this.tweetServie.searchByAccountId(+params['accountId']))
      .subscribe(tweets => this.tweets = tweets);
  }

  private setFollowers(): void {
    this.route.params
      .switchMap((params: Params) => this.accountService.listFollowers(+params['accountId']))
      .subscribe(followers => this.followersCount = followers.length - 1);
  }

  private setFollowees(): void {
    this.route.params
      .switchMap((params: Params) => this.accountService.listFollowees(+params['accountId']))
      .subscribe(followees => this.followeesCount = followees.length - 1);
  }

  private setFollowFlg(): void {
    this.route.params
      .switchMap((params: Params) => this.accountFollowingService.find(+params['accountId']))
      .subscribe(followFlg => {
        console.log(followFlg);
        this.followFlg = followFlg;
      });
  }
}
