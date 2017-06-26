import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../classes/tweet';
import {Account} from '../../classes/account';
import {TweetService} from '../../services/tweet-service/tweet.service';

@Component({
  selector: 'app-account-tweet-list',
  templateUrl: './account-tweet-list.component.html',
  styleUrls: ['./account-tweet-list.component.css']
})
export class AccountTweetListComponent implements OnInit {

  @Input() account: Account;
  @Input() currentAccount: Account;
  @Input() currentAccountIds: number[];
  tweets: Tweet[];

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.setTweets()
  }

  setTweets() {
    this.tweetService.searchByAccountId(this.account.accountId)
      .then(tweets =>
        this.tweets = tweets)
      .catch(AccountTweetListComponent.handleError)
  }
}
