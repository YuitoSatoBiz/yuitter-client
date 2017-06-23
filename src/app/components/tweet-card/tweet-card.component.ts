import {Component, Input, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Tweet} from '../../classes/tweet';
import {TweetUpdateFormComponent} from '../tweet-update-form/tweet-update-form.component';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css']
})
export class TweetCardComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialog = this.dialog.open(TweetUpdateFormComponent, {
      data: this.tweet,
      width: '500px'
    });
    dialog.afterClosed().subscribe(result => this.tweet = result);
  }
}
