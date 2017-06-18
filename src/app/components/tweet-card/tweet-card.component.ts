import {Component, Input, OnInit} from '@angular/core';
import {Tweet} from '../../classes/tweet';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css']
})
export class TweetCardComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }

}
