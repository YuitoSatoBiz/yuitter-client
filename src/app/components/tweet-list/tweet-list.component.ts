import {Component, Input, OnInit} from '@angular/core';
import {TweetService} from '../../services/tweet-service/tweet.service';
import {Tweet} from '../../classes/tweet';
import {Account} from '../../classes/account';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  @Input() account: Account;
  @Input() accounts: Account[];
  tweets: Tweet[];

  static handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(private tweetService: TweetService) {
  }

  getTweets(): void {
    this.tweetService.getTweets(this.account.accountId).then(tweets =>
      this.tweets = tweets
    ).catch(TweetListComponent.handleError);
  }

  ngOnInit() {
    this.getTweets();
  }
}
