import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Tweet} from '../../classes/tweet';
import {TweetService} from '../../services/tweet-service/tweet.service';

@Component({
  selector: 'app-tweet-delete-confirm',
  templateUrl: './tweet-delete-confirm.component.html',
  styleUrls: ['./tweet-delete-confirm.component.css']
})
export class TweetDeleteConfirmComponent implements OnInit {

  tweet: Tweet;

  constructor(@Inject(MD_DIALOG_DATA) public data: Tweet,
              private tweetService: TweetService,
              private dialogRef: MdDialogRef<TweetDeleteConfirmComponent>) {
  }

  ngOnInit() {
    this.tweet = this.data;
  }

  onClick(): void {
    this.tweetService.delete(this.tweet.tweetId).
      then(result => this.dialogRef.close(result));
  }
}
