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
  tweet: Tweet;
  tweets: Tweet[];
  accountIds: number[];
  error: string;
  options: Array<{ accountId: number, name: string }>;
  selectedValue: number;

  constructor(private tweetService: TweetService) {
  }

  getTweets(): void {
    this.tweetService.list(this.account.accountId)
      .then(tweets => this.tweets = tweets)
      .catch(e => this.handleError(e));
  }

  ngOnInit() {
    this.tweet = new Tweet(null, null, null, null, null);
    this.getTweets();
    this.accountIds = this.accounts.map(a => a.accountId);
    this.options = [
      { accountId: this.account.accountId, name: this.account.accountName },
      { accountId: -1, name: '全てのアカウントでつぶやく' }
    ];
    this.selectedValue = this.options[0].accountId;
  }

  onSubmit(tweetForm: FormGroup): void {
    if (!(tweetForm.value.tweetText.replace(/\s+/g, '').replace(/\r?\n/g, ''))) {
      this.error = '値が不正です。'
    } else {
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
        ).catch(e => this.handleError(e));
    }
    tweetForm.reset({ accountId: this.account.accountId });
    this.selectedValue = this.options[0].accountId;
  }

  private handleError(error: any): Promise<void> {
    return this.error = JSON.parse(error._body)['error'];
  }
}
