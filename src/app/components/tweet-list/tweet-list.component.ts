import {Component, OnInit} from '@angular/core';
import {TweetService} from '../../services/tweet-service/tweet.service';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  tweet: String;

  constructor(private tweetService: TweetService) {
  }

  ngOnInit() {
    this.getTweets();
  }

  getTweets(): void {
    this.tweetService.getTweets().then(tweet => this.tweet = tweet);
  }
}
