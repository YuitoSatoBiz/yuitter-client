import {Component, OnInit} from '@angular/core';
import {TweetService} from '../../services/tweet-service/tweet.service';
import {Tweet} from '../../classes/tweet';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  tweets: Tweet[];

  constructor(private tweetService: TweetService) {
  }

  getTweets(): void {
    this.tweetService.getTweets().then(tweets =>
      this.tweets = tweets
    ).catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
    this.getTweets();
  }
}
