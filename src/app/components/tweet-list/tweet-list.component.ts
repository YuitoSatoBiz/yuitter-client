import {Component, Input, OnInit, Output} from '@angular/core';
import {TweetService} from '../../services/tweet-service/tweet.service';
import {Tweet} from '../../classes/tweet';
import {Account} from '../../classes/account';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  @Input() currentAccount: Account[];
  @Input() account: Account;
  @Input() accounts: Account[];
  @Input() currentAccountIds: number[];
  @Output() selected: number;
  tweets: Tweet[];
  accountIds: number[];
  options: Array<{accountId: number, name: string}>;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  // setting this is the key to initial select.
  selectedValue: number;

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private tweetService: TweetService) {
  }

  getTweets(): void {
    this.tweetService.list(this.account.accountId).then(tweets =>
      this.tweets = tweets
    ).catch(TweetListComponent.handleError);
  }

  ngOnInit() {
    this.getTweets();
    this.accountIds = this.accounts.map(a => a.accountId);
    this.options = [
      {accountId: this.account.accountId, name: this.account.accountName},
      {accountId: -1, name: '全てのアカウントに送る'}
    ];
    this.selectedValue = this.options[0].accountId;
  }

  onSubmit(tweetForm: FormGroup): void {
    const accountId = tweetForm.value.accountId;
    let accountIds: number[];
    if (accountId >= 0) {
      accountIds = [accountId];
    } else {
      accountIds = this.accountIds;
    }
    this.tweetService.create(tweetForm.value.tweetText, accountIds)
      .then(tweet =>
        this.tweets.unshift(tweet)
      );
    tweetForm.reset({accountId: this.account.accountId});
    this.selectedValue = this.options[0].accountId;
  }
}
