import {Component, Input, OnInit} from '@angular/core';
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
  tweets: Tweet[];
  accountIds: number[];

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
  }

  onSubmit(tweetForm: FormGroup): void {
    this.tweetService.create(tweetForm.value.tweetText, tweetForm.value.accountIds)
      .then(tweet =>
        this.tweets.unshift(tweet)
      );
    tweetForm.reset()
  }
}
