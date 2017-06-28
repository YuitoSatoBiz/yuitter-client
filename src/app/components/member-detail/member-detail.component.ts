import {Component, OnInit} from '@angular/core';
import {Member} from '../../classes/member';
import {Account} from '../../classes/account';
import {CookieService} from 'angular2-cookie/core';
import {MemberService} from '../../services/member-service/member.service';
import {TweetService} from '../../services/tweet-service/tweet.service';
import {AccountService} from '../../services/account-service/account.service';
import {Tweet} from '../../classes/tweet';
import {AccountFormComponent} from '../account-form/account-form.component';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  currentMember: Member;
  accounts: Account[];
  currentAccount: Account;
  currentAccountIds: number[];
  tweets: Tweet[];
  followersCount: number;
  followeesCount: number;


  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private memberService: MemberService,
              private tweetService: TweetService,
              private accountService: AccountService,
              private cookieService: CookieService,
              private dialog: MdDialog) {
  }

  ngOnInit() {
    this.followersCount = 0;
    this.followeesCount = 0;
    this.setCurrentMember();
  }

  onLinkClick($event: any): void {
    this.currentAccount = this.accounts[$event.index];
    this.cookieService.remove('accountId');
    this.cookieService.put('accountId', this.currentAccount.accountId.toString());
    this.setTweets();
    this.setFollowers();
    this.setFollowees();
  }

  openAccountForm(): void {
    const dialog = this.dialog.open(AccountFormComponent, {
      width: '500px'
    });
    dialog.afterClosed().subscribe(result => {
      if (result != null) {
        this.accounts.push(result);
      }
    })
  }

  private setCurrentMember(): void {
    this.memberService.findCurrent()
      .then(member => {
        this.currentMember = member;
        this.accounts = this.currentMember.accounts;
        this.currentAccount = this.accounts[0];
        this.currentAccountIds = this.currentMember.accounts.map(account => account.accountId);
        this.cookieService.remove('accountId');
        this.cookieService.put('accountId', this.currentAccount.accountId.toString());
        this.setTweets();
        this.setFollowers();
        this.setFollowees();
      });
  }

  private setTweets() {
    this.tweetService.searchByAccountId(this.currentAccount.accountId)
      .then(tweets =>
        this.tweets = tweets)
      .catch(MemberDetailComponent.handleError)
  }

  private setFollowers(): void {
    this.accountService.listFollowers(this.currentAccount.accountId)
      .then(followers => this.followersCount = followers.length - 1)
      .catch(MemberDetailComponent.handleError)

  }

  private setFollowees(): void {
    this.accountService.listFollowees(this.currentAccount.accountId)
      .then(followees => this.followeesCount = followees.length - 1)
      .catch(MemberDetailComponent.handleError)
  }
}
